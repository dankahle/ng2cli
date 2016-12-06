import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Logger} from "../../core/logger.service";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  _name = '<no name>';
  @Input() age:number;
  count = 0;
  voteVal:boolean = true;

  constructor(private logger:Logger, app:AppComponent) {

    // console.log(app.getAppVal());

  }
  add() {this.count++;}
  sub() {this.count--;}

  voteIt(val) {
    this.vote.emit(val);
  }

  get name() { return this._name; }
  @Input() set name(name) {
    this._name = (name && name.trim()) || 'not name';
  }

  @Output() vote = new EventEmitter<boolean>();

  ngOnInit() {
    this.logger.log('child');
  }

}
