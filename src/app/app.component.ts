import { Component } from '@angular/core';
import * as _ from 'lodash';
import { LocalStorage } from 'ngx-webstorage';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bullet';
  colorScale = ["transparent", "green", "orange", "red"]
  days = ['Mon', 'Tue', "Wed", 'Thu', 'Fri', 'Sat', 'Sun']
  @LocalStorage() savedData;
  retrievedData
  ngOnInit() {
    if (!localStorage.getItem('savedData') || localStorage.getItem('savedData') === null) {
      localStorage.setItem('savedData', JSON.stringify({}));
    }
    this.retrievedData = JSON.parse(localStorage.getItem('savedData'));
  }
  saveEvent(event) {
    if (_.get(event, 'value') !== null) {

      this.retrievedData = JSON.parse(localStorage.getItem('savedData'));
      _.set(this.retrievedData, event.start, event.value)
      localStorage.setItem('savedData', JSON.stringify(this.retrievedData));
    }
  }
  retrieveValue(start) {

    let startString = _.words(start, /[^ ]+/g);
    startString = _.slice(startString, 0, 4);
    startString = _.join(startString, '_');
    this.retrievedData = JSON.parse(localStorage.getItem('savedData'));
    if (this.retrievedData) {
      for (const [key, value] of Object.entries(this.retrievedData)) {
        if (key === startString) {

          return value
        }
      }
    }
    return 0;

  }
}
