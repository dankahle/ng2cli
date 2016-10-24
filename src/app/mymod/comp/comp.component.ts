import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'mymod-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.scss']
})
export class CompComponent implements OnInit {

  @Input() prop:string;

  constructor() { }

  ngOnInit() {
  }

}
