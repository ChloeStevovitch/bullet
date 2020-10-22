import { Component, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  value;
  @Input() colorScale: Array<string>;
  @Input() default: number;
  @Input() date?: number;
  @Input() start?: number;
  @Output() event = new BehaviorSubject<any>({ start: null, value: null });

  constructor() { }

  ngOnInit(): void {
    this.value = this.default;
  }
  changeColor = () => {
    if (this.value === this.colorScale.length - 1) {
      this.value = 0
    } else {
      this.value++;
    }
    let start = _.words(this.start, /[^ ]+/g);
    start = _.slice(start, 0, 4)
    start = _.join(start, '_')

    this.event.next({ start: start, value: this.value })
  }

}
