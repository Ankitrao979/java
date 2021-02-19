import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
  @Input() width: string;
  @Input() height: string;

  constructor() { }

  getStyle() {
    return {
      width: this.width,
      height: this.height
    }
  }

}
