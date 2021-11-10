import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-router-example-employee-details',
  templateUrl: './router-example-employee-details.component.html',
  styleUrls: ['./router-example-employee-details.component.css']
})
export class RouterExampleEmployeeDetailsComponent implements OnInit {

  url:string  = "http://localhost:3000/employee";

  empObj:any = {};

  empArrayNew:any[] = [];

  

  constructor(private activatedRoute: ActivatedRoute, private httpObj: HttpClient) { }

  ngOnInit(): void {

    
  this.httpObj.get<any[]>(this.url).subscribe( (response:any[]) =>{
    this.empArrayNew = response;
    let eno = this.activatedRoute.snapshot.params["id"];
    // alert("Selected Empno  : " + eno);

    this.empObj = this.empArrayNew.find(item => item.empno == eno);
  });

    
  }


}
