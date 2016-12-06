/*
import {Directive, ViewContainerRef, Input, Component, ComponentFactoryResolver, ComponentFactory} from '@angular/core';


class DynamicComponent {
}

const dynamicComponent = Component({
  selector: 'dynamic-component',
  template: `<p>Dynamic Component</p>`
})(DynamicComponent);

@Directive({
  selector: '[appDkDynamic]'
})
export class DkDynamicDirective {

  constructor(private viewContainer: ViewContainerRef,
              private compResolver: ComponentFactoryResolver) {
  }

  @Input() set dkDynamic(comp: Component) {
    if (comp) {
      this.viewContainer.createComponent(this.compResolver.resolveComponentFactory(comp));
    } else {
      this.viewContainer.clear();
    }
  }

  createComponentFactory(resolver: ComponentFactoryResolver, metadata: ComponentMetadata): Promise<ComponentFactory<any>>
  {
    const cmpClass = class DynamicComponent {};
    const decoratedCmp = Component(metadata)(cmpClass);
    return resolver.resolveComponentFactory(decoratedCmp);
  }


}
*/
