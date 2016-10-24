import { Injectable } from '@angular/core';
import {ServService} from "../mymod/shared/serv.service";

@Injectable()
export class Logger {

  public publicval = 'publicval';
  private privateval = 'privateval';


  constructor(private serv:ServService) { }

}
