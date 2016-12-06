import {Directive, ViewContainerRef, TemplateRef, Input} from '@angular/core';

@Directive({
  selector: '[dkUnless]'
})
export class DkUnlessDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set dkUnless(condition: boolean) {
    if (!condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
