import { Injectable } from '@angular/core'
import * as _ from 'lodash'
import { BehaviorSubject } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class LocalServiceService {
    currentId = new BehaviorSubject<string>(null)
    constructor() {}
    getTrackersData() {
        if (localStorage.getItem('trackers'))
            return _.cloneDeep(JSON.parse(localStorage.getItem('trackers')))
        else {
            return null
        }
    }
    delete(id) {
        let trackersData = this.getTrackersData()
        delete trackersData[id]
        localStorage.setItem('trackers', JSON.stringify(trackersData))
        this.initCurrentId(trackersData)
        document.body.scrollTop = document.documentElement.scrollTop = 0;

    }
    initCurrentId(trackersData) {
        this.currentId.next(this.getFirstTrackerId(trackersData))
    }
    getFirstTrackerId(trackersData) {
        for (const [key, value] of Object.entries(trackersData)) {
            return key
        }
    }
   
    getTrackerData(id) {
        let trackers = this.getTrackersData()
        return _.get(trackers, id)
    }
    getTrackerVariable(id, name) {
        let globalData = this.getTrackerData(id)
        return _.get(globalData, name, null)
    }
    setTrackerData(id, tracker) {
        let trackersData = this.getTrackersData()
        _.set(trackersData, id, tracker)
        localStorage.setItem('trackers', JSON.stringify(trackersData))
    }
    setTrackerVariable(id, name, value) {
        let trackerData = this.getTrackerData(id)
        _.set(trackerData, name, value)
        this.setTrackerData(id, trackerData)
    }
    setTrackersData(trackers) {
        localStorage.setItem('trackers', JSON.stringify(trackers))
    }
}
