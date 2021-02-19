import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operator/delay';
import { timeout } from 'rxjs/operator/timeout';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  isProcessing = false;
  private plansInfo;
  systemMessage = {
    message1: 'loading',
    message2:  'loading-done'
  };
  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.plansInfo = [
      { planName: 'Silver plan', speed: '300 Mbps Speed', data: '1500 GB', postFupSpeed: '2 Mbps Post FUP Speed', price: '29.99' },
      { planName: 'Gold plan', speed: '500 Mbps Speed', data: '2000 GB', postFupSpeed: '5 Mbps Post FUP Speed', price: '39.99' },
      { planName: 'Platinum plan', speed: '1000 Mbps Speed', data: '2500 GB', postFupSpeed: '10 Mbps Post FUP Speed', price: '49.99' }
    ];
    this.makeServiceCall();
  }

  responseTime() {
    


  }

  makeServiceCall() {
    this.isProcessing = true;
    this.plansInfo = [];
    setTimeout(() => {
      this.isProcessing = false;
      this.plansInfo = [
        { planName: 'Silver plan', speed: '300 Mbps Speed', data: '1500 GB', postFupSpeed: '2 Mbps Post FUP Speed', price: '29.99' },
        { planName: 'Gold plan', speed: '500 Mbps Speed', data: '2000 GB', postFupSpeed: '5 Mbps Post FUP Speed', price: '39.99' },
        { planName: 'Platinum plan', speed: '1000 Mbps Speed', data: '2500 GB', postFupSpeed: '10 Mbps Post FUP Speed', price: '49.99' }
      ];
      this.changeDetector.detectChanges();
    }, 2000)
  }

}
