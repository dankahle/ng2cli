import {ComponentFactoryResolver, ViewContainerRef, Component, Input, ComponentRef} from '@angular/core';
import {ChildComponent} from "./child/child.component";

@Component({
  selector: 'dk-dynamic',
  template: `<div>dkDynamicComponent</div>
              <button (click)="unsub()">unsub</button><br>
              <div>before</div>
              <ng-content></ng-content>
              <div>after</div>
            `,
  entryComponents: [ChildComponent]
})
export class DkDynamicComponent {
  private c:ComponentRef<ChildComponent>;

  constructor(private viewContainer: ViewContainerRef,
              private compResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.c = this.viewContainer.createComponent(this.compResolver.resolveComponentFactory(ChildComponent));
    this.c.instance.age = 99;
    let subs = this.c.instance.vote.subscribe(x => console.log('voted: ' + x));
    this.c.onDestroy(() => {
      subs.unsubscribe();
      console.log('unsub child')
    })
  }

  unsub() {
    this.c.destroy();
  }
}
