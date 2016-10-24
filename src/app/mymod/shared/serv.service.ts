import { Injectable } from '@angular/core';

@Injectable()
export class ServService {

  constructor() { }

  getStuff(val) {
    return val + 'servServiceappend';
  }

}
