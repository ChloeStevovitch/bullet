import { Component, Input, Output } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import * as _ from 'lodash'
@Component({
    selector: 'app-color-picker',
    templateUrl: './color-picker.component.html',
    styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent {
    @Output() legendUpdate = new BehaviorSubject({})
    @Output() colorPickerChange = new BehaviorSubject({})
    @Output() deleteEvent = new BehaviorSubject({})
    @Input() color
    @Input() index? = null
    @Input() legend? = null
    @Input() textLight? = false

    onColorPicked(event: Event): void {
        this.colorPickerChange.next({ index: this.index, color: event })
    }
    onLegendUpdate(event: Event): void {
        this.legendUpdate.next({ index: this.index, legend: _.get(event.target,'value')  })
    }
    handleDelete(): void {
        this.deleteEvent.next({ index: this.index })
    }
}
