/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServService } from './serv.service';

describe('Service: Serv', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServService]
    });
  });

  it('should ...', inject([ServService], (service: ServService) => {
    expect(service).toBeTruthy();
  }));
});
