import { Component, OnInit } from '@angular/core'
import * as _ from 'lodash'
import { LocalServiceService } from './local-service.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    retrievedTextColor
    retrievedTrackers
    retrievedBorderColor
    retrievedBackgroundColor
    _=_
    retrievedTrackersArray = []
    constructor(public s: LocalServiceService) {}

    ngOnInit() {
        if (!this.s.getTrackersData()) {
            localStorage.clear()
            this.s.setTrackersData({})
            this.handleNewTracker()
        }
        if (!this.s.currentId.value){
            this.s.initCurrentId(this.s.getTrackersData())
        }
        this.s.currentId.subscribe(()=>{
           
            this.retrievedTextColor = this.s.getTrackerVariable(
                this.s.currentId.value,
                'textColor'
            )
           
            this.retrievedBorderColor = this.s.getTrackerVariable(
                this.s.currentId.value,
                'borderColor'
            )
            this.retrievedBorderColor = this.s.getTrackerVariable(
                this.s.currentId.value,
                'backgroundColor'
            )
            this.retrievedTrackers = this.s.getTrackersData()
            this.retrievedTrackersArray = this.getTrackersArray()
        })
       
       
    }
    getTrackersArray() {
        let array = []
        for (const [key, value] of Object.entries(this.retrievedTrackers)) {
            array.push({ title: _.get(value, 'title'), id: key, color: _.get(value, 'textColor') })
        }
        return array
    }
    getRetrievedTrackersArray(){
        return _.get( this,'retrievedTrackersArray',[])
    }
   
    getATitle(title,index){
        let array = ['Mood','Sport','Alcohol','Smoking', 'Reading','Showers','Vegetarian days','Cheat meals','Work','Music Practice','Dance','Drawing','Learn language','']
        let i = index % array.length
        return title ? title : array[i]
    }
    switchTracker(id){
        this.s.currentId.next(id)
    }
    handleNewTracker(){
        
        let newId ='tracker' + Math.ceil(Math.random() * 1000000000)
        if (!this.s.getTrackerData(newId)) {
            this.s.setTrackerData(newId,{})
        }
        this.switchTracker(newId)

    }
    onTitleUpdate(event: Event): void {
        this.s.setTrackerVariable(
            this.s.currentId.value,
            'title',
            _.get(event.target, 'value')
        )
        this.switchTracker(this.s.currentId.value)
    }
}
