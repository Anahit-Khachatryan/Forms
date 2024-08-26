import { Directive, ElementRef, Input, AfterViewInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOverflowTooltip]',
  standalone: true,
  host: {
        'class.name-tooltip' : 'getClassName()'
      },
})
export class OverflowTooltipDirective  {
      @Input('appOverflowTooltip') tooltipElRef!: HTMLElement;
    
      constructor(private el: ElementRef) {console.log(5, this.el)}
      
      getClassName() {
        const element = this.el.nativeElement;
        console.log(99, element)
        // return '';
        if (this.tooltipElRef) {
          return element.offsetWidth < element.scrollWidth ? 'name-tooltip' : '';
        }
        return '';
      }

      ngAfterViewInit() {
        console.log('Element after view init:', this.el.nativeElement);
        this.getClassName();
      }
    }