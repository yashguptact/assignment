import { Component } from '@angular/core';

@Component({
  selector: 'app-forms-template-example',
  templateUrl: './forms-template-example.component.html',
  styleUrls: ['./forms-template-example.component.css']
})
export class FormsTemplateExampleComponent {

  public  fname:string   = "";
	public  lname:string   = "";
	public  city:string   = "";
	public  email:string   = "";
	public  pincode:string   = "";


  public submit_click():void
  {
      // ajax call to send data to server
      alert("Customer Details are registered.");
  }


}
