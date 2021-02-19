import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AlertComponent,
    SpinnerComponent
  ],
  exports: [
    AlertComponent,
    SpinnerComponent
  ]
})
export class SharedComponentsModule { }
