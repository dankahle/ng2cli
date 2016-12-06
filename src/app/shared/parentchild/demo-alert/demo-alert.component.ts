import {Component, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {NgDemoChildComponent, Ng2DemoChildComponent} from "../demo-child/demo-child.component";

@Component({
  selector: 'demo-alert',
  templateUrl: './demo-alert.component.html',
  styleUrls: ['./demo-alert.component.css']
})
export class DemoAlertComponent {
  count = 0;
  constructor() { }

  @ViewChild(NgDemoChildComponent) ngchild;
  @ViewChild(Ng2DemoChildComponent) ng2child;
  @ViewChildren('demchild') children;


  ngAfterViewInit() {
    this.children.forEach(x => console.log('viewchildren', x.type));
  }

}
