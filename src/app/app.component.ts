import { Component, ViewEncapsulation } from '@angular/core';
import * as _ from 'lodash';
import { LocalStorage } from 'ngx-webstorage';

@Component({
  selector: 'app-root',

  encapsulation: ViewEncapsulation.None,

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @LocalStorage() colorScale;
  monthsLength = [31,29,31,30,31,30,31,31,30,31,30,31]
  monthsName = ['Jan', 'Feb', "Mar", 'Apr','May', 'Jun', 'Jul', 'Aug','Sep','Oct','Nov','Dec']
  @LocalStorage() savedData;
  retrievedData;
  retrievedColorScale;

  initTable(length){
    return new Array(length)
  }
  reset(){
    if (confirm('Are you sure you want to delete all your data ? ')){
      this.save('savedData',{})
      this.retrievedData = this.getSaveData('savedData');
    }
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
  }
  getColor(year,month,day){
    let date = this.convertDateToString(year,month,day)
    let value: any = this.findValue(date)
    return this.retrievedColorScale[value];
  }
  convertDateToString(year,months,days){
    let string =_.join([year,months,days], '_');
    return string
  }
  findValue(date : string){
    return _.get(this.retrievedData, date, 0)
  }
  findData(date : string){
    return _.get(this.retrievedData, date, null)
  }
  handleClick(year,month,day) {
  let date = this.convertDateToString(year,month,day)
  let value: any = this.findValue(date)
  if (value === this.retrievedColorScale.length - 1) {
    value = 0
  } else {
    value ++ ;
  }
  _.set(this.retrievedData,date,value)
  this.save('savedData',this.retrievedData);
 }
 handleRightClick(year,month,day) {
  let date = this.convertDateToString(year,month,day)
  let value: any = this.findValue(date)
  if (value === 0) {
    value = this.retrievedColorScale.length - 1
  } else {
    value -- ;
  }
  _.set(this.retrievedData,date,value)
  this.save('savedData',this.retrievedData);
  return false;
 }
}
