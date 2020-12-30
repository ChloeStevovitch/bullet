import { Component, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent  {
  @Input() color
  @Output() colorPickerChange = new BehaviorSubject({})
  @Input() index

  onColorPicked(event : Event):void{
    this.colorPickerChange.next({index : this.index, color : event});
  }

}
