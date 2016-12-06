/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DemoAlertComponent } from './demo-alert.component';

describe('DemoAlertComponent', () => {
  let component: DemoAlertComponent;
  let fixture: ComponentFixture<DemoAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
