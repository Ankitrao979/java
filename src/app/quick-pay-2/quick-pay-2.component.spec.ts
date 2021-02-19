import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickPay2Component } from './quick-pay-2.component';

describe('QuickPay2Component', () => {
  let component: QuickPay2Component;
  let fixture: ComponentFixture<QuickPay2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickPay2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickPay2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
