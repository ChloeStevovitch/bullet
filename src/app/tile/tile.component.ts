import { Component, Input, OnInit } from '@angular/core';

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
  }

}
