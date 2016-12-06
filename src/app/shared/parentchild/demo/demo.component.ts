import {Component, OnInit, ContentChild, ContentChildren} from '@angular/core';
import {DemoAlertComponent} from "../demo-alert/demo-alert.component";
import {NgDemoChildComponent, Ng2DemoChildComponent, DemoChildComponent} from "../demo-child/demo-child.component";
import {findLoadChildren} from "angular-cli/models/find-lazy-modules";

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  name = 'demo';
  constructor() { }

  @ContentChild(NgDemoChildComponent) ngchild;
  @ContentChild(Ng2DemoChildComponent) ng2child;
  @ContentChildren('demchild') children;


  ngAfterContentInit() {
    // this.children.forEach(x => console.log('contentchildren', x.type));
    this.children.forEach(x => console.log('contentchildren', (<DemoChildComponent>x).showType()));
  }

}
