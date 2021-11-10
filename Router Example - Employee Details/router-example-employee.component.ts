import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-router-example-employee',
  templateUrl: './router-example-employee.component.html',
  styleUrls: ['./router-example-employee.component.css']
})
export class RouterExampleEmployeeComponent implements OnInit {

  
  empno: number  = 0;
  ename  :string  = "";
  job  :string  = "";
  sal  :number = 0;
  deptno: number  = 0;
  isDisabled :boolean = false;
 
  url:string  = "http://localhost:3000/employee";
 
   public empArray:any[] = [];
 
 
   constructor(private httpObj: HttpClient) { }
 
   ngOnInit(): void {
   }
 
 
   getEmp_click()
   {
     this.httpObj.get<any[]>(this.url).subscribe( (response:any[]) =>{
           this.empArray = response;
     });
 
   }
 
 
   addEmp_click()
   {
     let empObj:Emp = new Emp();
     empObj.empno = this.empno;
     empObj.ename = this.ename;
     empObj.job = this.job;
     empObj.sal = this.sal;
     empObj.deptno = this.deptno;
 
     this.httpObj.post<any>(this.url,  empObj).subscribe( (response:any) =>{
       //console.log("New Employee details are added to server.");
       alert("New Employee details are added to server.");
       this.clearFields();
       this.getEmp_click();  // to get all the updated results
     });
   }
 
   removeEmp_click(empno:number)
   {
     this.httpObj.delete<any>(this.url + "/" + empno).subscribe( (response:any) =>{
      // console.log("Requested Employee details are deleted from  server.");
       alert("Requested Employee details are deleted from  server.");
       this.getEmp_click();  // to get all the updated results
     });
   }
 
 
   selectEmp_click(empno:number)
   {
     this.httpObj.get<any>(this.url + "/" + empno).subscribe( (response:any) =>{
 
       let empObj = response;
       this.empno =   empObj.empno;
       this.ename =   empObj.ename;
       this.job 		=  empObj.job;
       this.sal 		=  empObj.sal;
       this.deptno 		=  empObj.deptno;
       this.isDisabled = true;
     });
 
   }
 
   updateEmp_click()
   {
     let empObj:Emp = new Emp();
     empObj.empno = this.empno;
     empObj.ename = this.ename;
     empObj.job = this.job;
     empObj.sal = this.sal;
     empObj.deptno = this.deptno;
 
     this.httpObj.put<any>(this.url + "/" +  empObj.empno,  empObj).subscribe( (response:any) =>{
       //console.log("Requested Employee details are updated to server.");
       alert("Requested Employee details are updated to server.");
       this.clearFields();
       this.getEmp_click();  // to get all the updated results
     });
 
   }
 
   clearFields()
   {
       this.isDisabled = false;
       this.empno = 0;
       this.ename  = "";
       this.job  = "";
       this.sal  = 0;
       this.deptno = 0;
   }
 
 
 
 }
 
 
 class Emp
 {
   empno  : number = 0;
   ename  : string  = "";
   job  : string  = "";
   sal  :number = 0;
  deptno: number  = 0;
 }
 