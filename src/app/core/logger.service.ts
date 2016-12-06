import { Injectable } from '@angular/core';
import {ServService} from "../mymod/shared/serv.service";

@Injectable()
export class Logger {

  public publicval = 'publicval';
  private privateval = 'privateval';
  init = 0;

  constructor(private serv:ServService) {
  }

  log(msg) {
    console.log(msg + this.init++);
  }

}
