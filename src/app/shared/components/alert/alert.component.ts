import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { messageMap } from './alert.component.resource';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnChanges {
  alertClass: string;
  @Input() message: string;
  @Input() type: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    let map = messageMap[this.type];
    if (!map) {
      map = messageMap.error;
    }
    this.alertClass = map.alertClass;
  }

  ngOnInit() {
    console.log(this.message, 'message from input');
    console.log(this.type, 'message type from input');
    // this.isBackendDown = true;
  }

  // responseMessage() {

  //   // this.isBackendDown = { class: 'danger' };
  //   if (this.type = 'error') {
  //     this.type = 'danger';
  //   } else {
  //     this.isBackendDown = { class: 'danger' };
  //   }
  // }

}
