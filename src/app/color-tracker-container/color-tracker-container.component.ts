import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import * as _ from 'lodash'
import { LocalServiceService } from '../local-service.service'

@Component({
    selector: 'app-color-tracker-container',
    templateUrl: './color-tracker-container.component.html',
    styleUrls: ['./color-tracker-container.component.scss'],
})
export class ColorTrackerContainerComponent implements OnInit {
    retrievedTextColor
    retrievedTrackers
    retrievedBorderColor
    retrievedBackgroundColor
    _ = _
    retrievedTrackersArray = []
    constructor(private router: Router, public s: LocalServiceService) {}

    ngOnInit() {
        if (!this.s.getTrackersData()) {
            localStorage.clear()
            this.s.setTrackersData({})
            this.handleNewTracker()
        }
        if (!this.s.currentId.value) {
            this.s.initCurrentId(this.s.getTrackersData())
        }
        this.s.currentId.subscribe(() => {
            this.retrievedTextColor = this.s.getTrackerVariable(
                this.s.currentId.value,
                'textColor'
            )

            this.retrievedBorderColor = this.s.getTrackerVariable(
                this.s.currentId.value,
                'borderColor'
            )
            this.retrievedBackgroundColor = this.s.getTrackerVariable(
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
            array.push({
                title: _.get(value, 'title'),
                id: key,
                color: _.get(value, 'textColor'),
            })
        }
        return array
    }
    getRetrievedTrackersArray() {
        return _.get(this, 'retrievedTrackersArray', [])
    }
    handleResetAll() {
        if (confirm('Are you sure you want to delete all your trackers ? ')) {
            if (confirm('Really really sure ? ')) {
                localStorage.clear()
                this.s.setTrackersData({})
                this.handleNewTracker()
                document.body.scrollTop = document.documentElement.scrollTop = 0
            }
        }
    }
    getATitle(title, index) {
        let array = [
            'Smoking',
            'Mood',
            'Sport',
            'Climbing',
            'Alcohol',
            'House Cleaning',
            'Balanced diet',
            'Stretch',
            'Reading',
            'Call to Grandparents',
            'Plant watering',
            'Studying',
            'Showers',
            '10000 Steps',
            'Jogging',
            'Vegetarian days',
            'No screens',
            'Cheat meals',
            'Yoga',
            'Work',
            'Music Practice',
            'Dance',
            'Drawing',
            'Learn language',
        ]
        let i = Math.floor(Math.random() * array.length)
        return title ? title : array[i]
    }
    switchTracker(id) {
        this.s.currentId.next(id)
    }
    handleNewTracker() {
        let length = this.getRetrievedTrackersArray().length
        let newId = 'tracker' + Math.ceil(Math.random() * 1000000000)
        if (!this.s.getTrackerData(newId)) {
            this.s.setTrackerData(newId, {
                title: this.getATitle(null, length),
            })
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
    goTo(name) {
        this.router.navigate(['about'])
    }
}
