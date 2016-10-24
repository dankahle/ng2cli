import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
  // camelcase for directive selectors, snake for components both with prefixes
  selector: '[mymodDir]'
  // selector: '.red'
})
export class DirDirective {

  constructor(el:ElementRef, renderer:Renderer) {
    renderer.setElementStyle(el.nativeElement, 'color', 'red');
  }

}
