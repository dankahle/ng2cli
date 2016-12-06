import {Component, OnInit, Input, SimpleChange, SimpleChanges} from '@angular/core';
import {DemoComponent} from "../demo/demo.component";


class DemoChildComponent implements OnInit {

  constructor(private demo:DemoComponent) {
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'ng-demo-child',
  templateUrl: './demo-child.component.html',
  styleUrls: ['./demo-child.component.css']
})
export class NgDemoChildComponent extends DemoChildComponent {
  type = 'ngcomp';
  private _count:number;
  get count():number {
    return this._count;
  }
  @Input() set count(val:number) {
    this._count = val * 5;
    console.log('ngchild set count', val, this._count);
  }
  constructor(demo:DemoComponent) {
    super(demo);
    console.log('ngcomp');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngchild on changes count', changes['count'].currentValue, this._count, changes['count'].isFirstChange());
  }
}

@Component({
  selector: 'ng2-demo-child',
  templateUrl: './demo-child.component.html',
  styleUrls: ['./demo-child.component.css']
})
export class Ng2DemoChildComponent extends DemoChildComponent {
  type = 'ng2comp';
  constructor(demo:DemoComponent) {
    super(demo);
    console.log('ng2comp');
  }
}


