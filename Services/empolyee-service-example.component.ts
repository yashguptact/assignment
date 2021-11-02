import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-empolyee-service-example',
  templateUrl: './empolyee-service-example.component.html',
  styleUrls: ['./empolyee-service-example.component.css']
})
export class EmpolyeeSerExComponent implements OnInit {

  empno: number  = 0;
  ename  :string  = "";
 job  :string  = "";
 sal: number  = 0;
 deptno: number  = 0;
 isDisabled :boolean = false;

  public empArray:Emp[] = [];


  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }


  getEmp_click()
  {
    this.empArray  = this.dataService.getData();
  }

  addEmp_click()
  {
    let deptObj:Emp = new Emp();
    deptObj.empno = this.empno;
    deptObj.ename = this.ename;
    deptObj.job = this.job;
    deptObj.sal = this.sal;
    deptObj.deptno = this.deptno;

    this.dataService.addData(deptObj);  // Insert into database
    this.empArray  = this.dataService.getData();  // Get the latest results

    this.clearFields();
  }

  removeEmp_click(dno:number)
  {
    this.dataService.removeData(dno);
    this.empArray  = this.dataService.getData();  // Get the latest results
  }


  clearFields()
  {
      this.isDisabled = false;
      this.empno = 0;
      this.ename  = "";
      this.job  = "";
      this.sal = 0;
      this.deptno = 0;
  }



}


class Emp
{
  empno: number  = 0;
  ename  :string  = "";
 job  :string  = "";
 sal: number  = 0;
 deptno: number  = 0;
}

