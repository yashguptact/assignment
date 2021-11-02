import { Directive, ViewContainerRef, TemplateRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appIsAdmin]'
})
export class IsadminDirective implements OnInit {

  @Input()  appIsAdmin: string = "";

  allowedAdmin:string[] = ["Scott", "Smith", "Robert", "Mark"];
  
  constructor(private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>)
  {

  }
  
  ngOnInit()
  {    
      if(this.allowedAdmin.indexOf(this.appIsAdmin)>-1)
      {
        // show
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
      else
      {
        // hide
        this.viewContainer.clear();
      }
    
        
  }

}

