import {Directive, ElementRef, Renderer, Input, Output, EventEmitter, HostListener, HostBinding} from '@angular/core';

@Directive({
  // camelcase for directive selectors, snake for components both with prefixes
  selector: '[mymodDir]'
  // selector: '.red'
})
export class DirDirective {

  @Input() color:string;
  @Output() myEvent = new EventEmitter();


  constructor(private el:ElementRef, private renderer:Renderer) {
  }

  ngOnInit() {
    console.log('dir: ', this.color);

    setTimeout(() => {
      this.myEvent.emit('eventval');
      this.val = 'red';
    })
  }

  @HostBinding('style.color') val:string;

  @HostListener('mouseenter') onMouseEnter(event) {
    // event is undefined, what?
    console.log('mouseenter', event);
    this.highlight(this.color);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
  }



}
