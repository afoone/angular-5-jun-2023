import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appSubrayado]',
})
export class SubrayadoDirective implements OnInit {
  constructor(private _el: ElementRef) {
  }

  @Input('appSubrayado')
   _data: string | undefined;

  ngOnInit(): void {
      this._el.nativeElement.style.backgroundColor = this._data
      // const text = this._el.nativeElement.innerHTML
      // console.log({text})
      // this._el.nativeElement.innerText = "dsfsdfdfs"
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this._el.nativeElement.style.backgroundColor = "cyan"
    this._el.nativeElement.innerText = this._el.nativeElement.innerText.toUpperCase()
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this._el.nativeElement.style.backgroundColor = this._data
  }
}
