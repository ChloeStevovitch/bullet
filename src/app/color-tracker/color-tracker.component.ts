import { Component, Input, OnInit } from '@angular/core'
import * as _ from 'lodash'
import { LocalServiceService } from '../local-service.service'

@Component({
    selector: 'app-color-tracker',
    templateUrl: './color-tracker.component.html',
    styleUrls: ['./color-tracker.component.scss'],
    // encapsulation: ViewEncapsulation.None,
})
export class ColorTrackerComponent implements OnInit {
    monthsLength = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    monthsName = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ]
    JSON = JSON
    year = 2021
    retrievedBackgroundColor
    retrievedData
    retrievedColorScale
    retrievedTextColor
    retrievedBorderColor
    retrievedTitle
    retrievedTracker
    inputId
    editionMode = false
    constructor(private s: LocalServiceService) {}
    ngOnInit() {
        this.s.currentId.subscribe((res) => {
            this.inputId = this.s.currentId.value

            if (!this.s.getTrackerVariable(this.inputId, 'title')) {
                this.s.setTrackerVariable(this.inputId, 'title', null)
            }
            if (!this.s.getTrackerVariable(this.inputId, 'savedData')) {
                this.s.setTrackerVariable(this.inputId, 'savedData', {})
            }
            if (!this.s.getTrackerVariable(this.inputId, 'colorScale')) {
                if (
                    this.s.currentId.value ===
                    this.s.getFirstTrackerId(this.s.getTrackersData())
                ) {
                    this.s.setTrackerVariable(this.inputId, 'colorScale', [
                        { color: 'transparent', legend: null },
                        { color: '#8ae685', legend: null },
                        { color: '#ffee24', legend: null },
                        { color: '#ff4747', legend: null },
                    ])
                } else {
                    this.s.setTrackerVariable(this.inputId, 'colorScale', [
                        { color: 'transparent', legend: null },
                        { color: this.getRandomColor(), legend: null },
                        { color: this.getRandomColor(), legend: null },
                        { color: this.getRandomColor(), legend: null },
                    ])
                }
            }
            if (!this.s.getTrackerVariable(this.inputId, 'backgroundColor')) {
                this.s.setTrackerVariable(
                    this.inputId,
                    'backgroundColor',
                    '#ffffff'
                )
            }
            if (!this.s.getTrackerVariable(this.inputId, 'textColor')) {
                this.s.setTrackerVariable(
                    this.inputId,
                    'textColor',
                    'rgb(26, 25, 25)'
                )
            }
            if (!this.s.getTrackerVariable(this.inputId, 'borderColor')) {
                this.s.setTrackerVariable(
                    this.inputId,
                    'borderColor',
                    'rgb(26, 25, 25)'
                )
            }
            this.retrievedBorderColor = this.s.getTrackerVariable(
                this.inputId,
                'borderColor'
            )
            this.retrievedBackgroundColor = this.s.getTrackerVariable(
                this.inputId,
                'backgroundColor'
            )
            this.retrievedData = this.s.getTrackerVariable(
                this.inputId,
                'savedData'
            )
            this.retrievedColorScale = this.s.getTrackerVariable(
                this.inputId,
                'colorScale'
            )
            this.retrievedTextColor = this.s.getTrackerVariable(
                this.inputId,
                'textColor'
            )
            this.retrievedTitle = this.s.getTrackerVariable(
                this.inputId,
                'title'
            )
            this.retrievedTracker = this.s.getTrackerData(this.inputId)
        })
    }

    initTable(length) {
        return new Array(length)
    }

    reset() {
        if (confirm('Are you sure you want to delete all your data ? ')) {
            this.s.setTrackerVariable(this.inputId, 'savedData', {})
                    this.s.currentId.next(this.inputId)

            document.body.scrollTop = document.documentElement.scrollTop = 0
        }
    }
    toggleEdition() {
        this.editionMode = !this.editionMode
    }
    isJson(str) {
        try {
            JSON.parse(str)
        } catch (e) {
            return false
        }
        return true
    }
    handleTrackerDelete() {
        if (confirm('Are you sure you want to delete this tracker ? ')) {
            this.s.delete(this.inputId)
        }
    }
    handleNewData(event: Event) {
        if (!this.isJson(_.get(event.target, 'value'))) {
            return
        }
        this.s.setTrackerData(
            this.inputId,
            JSON.parse(_.get(event.target, 'value'))
        )
        this.s.currentId.next(this.inputId)
    }
    updateColor(event, savedDataName, retrievedDataName, index?) {
        if (_.isEmpty(event)) {
            return
        }
        const newColor = _.get(event, 'color')
        if (index || index === 0) {
            const index = _.get(event, 'index')
            const actualColor = _.nth(this.retrievedColorScale, index)
            if (!actualColor || !newColor) {
                return
            }
            _.set(this.retrievedColorScale[index], 'color', newColor)
        } else {
            _.set(this, retrievedDataName, newColor)
        }
        this.s.setTrackerVariable(
            this.inputId,
            savedDataName,
            _.get(this, retrievedDataName)
        )
        this.s.currentId.next(this.inputId)


    }

    setLegend(event) {
        if (_.isEmpty(event)) {
            return
        }
        const index = _.get(event, 'index')
        const legend = _.get(event, 'legend', null)
        _.set(this.retrievedColorScale[index], 'legend', legend)
        this.s.setTrackerVariable(
            this.inputId,
            'colorScale',
            this.retrievedColorScale
        )
    }
    handleDelete(event) {
        if (_.isEmpty(event)) {
            return
        }
        if (
            confirm(
                'Are you sure you want to delete this color ? this will affect the grinputId '
            )
        ) {
            const index = _.get(event, 'index')
            for (const [key, value] of Object.entries(this.retrievedData)) {
                if (value > index) {
                    let newValue = this.retrievedData[key] - 1
                    this.retrievedData[key] = newValue
                } else if (value === index) {
                    delete this.retrievedData[key]
                }
            }
            this.s.setTrackerVariable(
                this.inputId,
                'savedData',
                this.retrievedData
            )

            this.retrievedColorScale.splice(index, 1)
            this.s.setTrackerVariable(
                this.inputId,
                'colorScale',
                this.retrievedColorScale
            )
        }
    }
    addColor() {
        this.retrievedColorScale.push({
            color: this.getRandomColor(),
            legend: null,
        })
        this.s.setTrackerVariable(
            this.inputId,
            'colorScale',
            this.retrievedColorScale
        )
    }
    getRandomColor() {
        let randomRed = Math.ceil(Math.random() * 255)
        let randomGreen = Math.ceil(Math.random() * 255)
        let randomBlue = Math.ceil(Math.random() * 255)
        return 'rgb(' + randomRed + ',' + randomGreen + ',' + randomBlue + ')'
    }
    getColor(year, month, day) {
        let date = this.convertDateToString(year, month, day)
        let value: any = this.findValue(date)
        return _.get(this.retrievedColorScale[value], 'color')
    }
    convertDateToString(year, months, days) {
        let string = _.join([year, months, days + 1], '_')
        return string
    }
    findValue(date: string) {
        return _.get(this.retrievedData, date, 0)
    }
    findData(date: string) {
        return _.get(this.retrievedData, date, null)
    }
    handleClick(year, month, day) {
        let date = this.convertDateToString(year, month, day)
        let value: any = this.findValue(date)
        if (value === this.retrievedColorScale.length - 1) {
            value = 0
        } else {
            value++
        }
        _.set(this.retrievedData, date, value)
        this.s.setTrackerVariable(this.inputId, 'savedData', this.retrievedData)
    }
    handleRightClick(year, month, day) {
        let date = this.convertDateToString(year, month, day)
        let value: any = this.findValue(date)
        if (value === 0) {
            value = this.retrievedColorScale.length - 1
        } else {
            value--
        }
        _.set(this.retrievedData, date, value)
        this.s.setTrackerVariable(this.inputId, 'savedData', this.retrievedData)
        return false
    }
}
