import { Component, ViewEncapsulation } from '@angular/core'
import * as _ from 'lodash'

@Component({
    selector: 'app-root',

    encapsulation: ViewEncapsulation.None,

    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
    retrievedBackgroundColor
    retrievedData
    retrievedColorScale
    retrievedTextColor
    retrievedBorderColor

    initTable(length) {
        return new Array(length)
    }
    reset() {
        if (confirm('Are you sure you want to delete all your data ? ')) {
            this.save('savedData', {})
            this.retrievedData = this.getSaveData('savedData')
        }
    }
    ngOnInit() {
        if (!this.getSaveData('savedData')) {
            this.save('savedData', {})
        }
        if (!this.getSaveData('colorScale')) {
            this.save('colorScale', [
                { color: 'transparent', legend: null },
                { color: '#8ae685', legend: null },
                { color: '#ffee24', legend: null },
                { color: '#ff4747', legend: null },
            ])
        }
        if (!this.getSaveData('backgroundColor')) {
            this.save('backgroundColor', '#f3ede6')
        }
        if (!this.getSaveData('textColor')) {
            this.save('textColor', 'rgb(26, 25, 25)')
        }
        if (!this.getSaveData('borderColor')) {
            this.save('borderColor', 'rgb(26, 25, 25)')
        }
        this.retrievedBorderColor = this.getSaveData('borderColor')
        this.retrievedBackgroundColor = this.getSaveData('backgroundColor')
        this.retrievedData = this.getSaveData('savedData')
        this.retrievedColorScale = this.getSaveData('colorScale')
        this.retrievedTextColor = this.getSaveData('textColor')
    }

    updateColor(event, savedDataName,retrievedDataName, index?) {
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
            _.set(this,retrievedDataName, newColor)
        }

        this.save(savedDataName, _.get(this,retrievedDataName))
    }

    save(name, value) {
        localStorage.setItem(name, JSON.stringify(value))
    }

    getSaveData(name) {
        if (localStorage.getItem(name))
            return _.cloneDeep(JSON.parse(localStorage.getItem(name)))
        else {
            return null
        }
    }

    setLegend(event) {
        if (_.isEmpty(event)) {
            return
        }
        const index = _.get(event, 'index')
        const legend = _.get(event, 'legend', null)
        _.set(this.retrievedColorScale[index], 'legend', legend)
        this.save('colorScale', this.retrievedColorScale)
    }
    handleDelete(event) {
        if (_.isEmpty(event)) {
            return
        }
        if (
            confirm(
                'Are you sure you want to delete this color ? this will affect the grid '
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
            this.save('savedData', this.retrievedData)

            this.retrievedColorScale.splice(index, 1)
            this.save('colorScale', this.retrievedColorScale)
        }
    }
    addColor() {
        let randomRed = Math.ceil(Math.random() * 255)
        let randomGreen = Math.ceil(Math.random() * 255)
        let randomBlue = Math.ceil(Math.random() * 255)

        this.retrievedColorScale.push({
            color:
                'rgb(' + randomRed + ',' + randomGreen + ',' + randomBlue + ')',
            legend: null,
        })
        this.save('colorScale', this.retrievedColorScale)
    }
    getColor(year, month, day) {
        let date = this.convertDateToString(year, month, day)
        let value: any = this.findValue(date)
        return _.get(this.retrievedColorScale[value], 'color')
    }
    convertDateToString(year, months, days) {
        let string = _.join([year, months, days], '_')
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
        this.save('savedData', this.retrievedData)
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
        this.save('savedData', this.retrievedData)
        return false
    }
}
