/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DemoChildComponent } from './demo-child.component';

describe('DemoChildComponent', () => {
  let component: DemoChildComponent;
  let fixture: ComponentFixture<DemoChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
