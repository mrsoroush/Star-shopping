import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appRedColor]'
})
export class RedColorDirective implements OnInit {
  
  @Input() defaultCursor: string = 'auto';
  @Input() hoverCursor: string = 'pointer';
  @HostBinding('style.cursor') c: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit(): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
    this.renderer.setStyle(this.elRef.nativeElement, 'margin-left', '20px');
    this.c = this.defaultCursor;
  }

  @HostListener('mouseenter') me(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'text-decoration', 'underline');
    this.c = this.hoverCursor;
  }

  @HostListener('mouseleave') ml(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'text-decoration', 'none');
    this.c = this.defaultCursor;
  }
}
