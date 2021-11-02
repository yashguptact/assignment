import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[shadowdir]'
})
export class AppshadowDirective implements OnInit{

  appAppshadow:string ="0 1px 4px 0";
  @Input() shadowdir:string ="black";

  constructor(private element: ElementRef) {
   
   }

   ngOnInit(){
     
      this.element.nativeElement.style.boxShadow = this.appAppshadow;
      this.element.nativeElement.style.color = this.shadowdir;
   }

}
