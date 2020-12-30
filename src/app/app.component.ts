import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CalendarEvent, CalendarMonthViewBeforeRenderEvent, CalendarView } from 'angular-calendar';
import * as _ from 'lodash';
import { LocalStorage } from 'ngx-webstorage';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',

  encapsulation: ViewEncapsulation.None,

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bullet';
  @LocalStorage() colorScale;
  clickedDate: Date;
  days = ['Mon', 'Tue', "Wed", 'Thu', 'Fri', 'Sat', 'Sun']

  @LocalStorage() savedData;
  retrievedData;
  retrievedColorScale;
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  dayClicked
  refresh: Subject<any> = new Subject();

  beforeMonthViewRender(renderEvent: CalendarMonthViewBeforeRenderEvent): void {
    renderEvent.body.forEach((day) => {
      let dateString = this.convertDateToString(day.date)
      if ( this.findData(dateString)){
        if(this.findValue(dateString) === 0)
        day.cssClass = 'color0' ;
        if(this.findValue(dateString) === 1)
        day.cssClass = 'color1' ;
        if(this.findValue(dateString) === 2)
        day.cssClass = 'color2' ;
        if(this.findValue(dateString) === 3)
        day.cssClass = 'color3' ;
      }
     
    });
  }

 
  ngOnInit() {

 
    if (!this.getSaveData('savedData')) {
     this.save('savedData', {});
    }
    if (!this.getSaveData('colorScale')) {
    this.save('colorScale',["transparent", "green", "orange", "red"]);
    }
    this.retrievedData = this.getSaveData('savedData');
    this.retrievedColorScale = this.getSaveData('colorScale');
    _.set(document.styleSheets[3].cssRules[0],'style.backgroundColor',this.retrievedColorScale[0])
    _.set(document.styleSheets[3].cssRules[1],'style.backgroundColor',this.retrievedColorScale[1])
    _.set(document.styleSheets[3].cssRules[2],'style.backgroundColor',this.retrievedColorScale[2])
    _.set(document.styleSheets[3].cssRules[3],'style.backgroundColor',this.retrievedColorScale[3])

  }

  save(name,value) {
    localStorage.setItem(name, JSON.stringify(value));
  }

  getSaveData(name) {
    if (localStorage.getItem(name))
    return _.cloneDeep(JSON.parse(localStorage.getItem(name)))
    else{
    return null
    }
  }
  setColor(event){
    if (_.isEmpty(event)){
      return
    }
    const newColor = _.get(event,'color');
    const index =_.get(event,'index');
    const actualColor = _.nth(this.retrievedColorScale,index)
    if (!actualColor || !newColor ){
      return
    }
    this.retrievedColorScale[index] = newColor
    this.save('colorScale',this.retrievedColorScale);
    _.set(document.styleSheets[3].cssRules[index],'style.backgroundColor',this.retrievedColorScale[index])

  }
  convertDateToString(date){
    let string = _.words(date, /[^ ]+/g);
    string = _.slice(string, 0, 4);
    string = _.join(string, '_');
    return string
  }

  findValue(date : string){
    return _.get(this.retrievedData, date, 0)
  }
  findData(date : string){
    return _.get(this.retrievedData, date, null)
  }
  refreshView(): void {
    this.refresh.next();
  }

  handleClick(event) {
  let date = this.convertDateToString(event)
  let value: any = this.findValue(date)
  if (value === this.retrievedColorScale.length - 1) {
    value = 0
  } else {
    value ++ ;
  }
  _.set(this.retrievedData,date,value)
  this.save('savedData',this.retrievedData);
  this.refreshView()
 }
}
