import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickPayComponent } from './quick-pay.component';

describe('QuickPayComponent', () => {
  let component: QuickPayComponent;
  let fixture: ComponentFixture<QuickPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
