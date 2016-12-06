/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DkModalComponent } from './dk-modal.component';

describe('DkModalComponent', () => {
  let component: DkModalComponent;
  let fixture: ComponentFixture<DkModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DkModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
