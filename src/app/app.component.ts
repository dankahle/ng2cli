import {Component, Inject} from '@angular/core';
import {ServService} from "./mymod/shared/serv.service";
import {Logger} from "./core/logger.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  val = 'dank';

  public publicval = 'publicval';
  private privateval = 'privateval';

  constructor(private logger:Logger, serv:ServService, @Inject('MyVal') public myval) {
    this.title += serv.getStuff('another');
  }


}
