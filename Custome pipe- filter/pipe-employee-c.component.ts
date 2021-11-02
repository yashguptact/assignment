import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-employee-c',
  templateUrl: './pipe-employee-c.component.html',
  styleUrls: ['./pipe-employee-c.component.css']
})
export class PipeEmployeeCComponent {


  minValue:number  = 100;
  maxValue:number  = 600;


    public empData:any[] = [
      {"empno":6589,"ename":"SRIRAM","job":"MANAGER","sal":100,"deptno":30},
      {"empno":6369,"ename":"SMITH","job":"CLERK","sal":200,"deptno":20},
      {"empno":6499,"ename":"ALLEN","job":"SALESMAN","sal":300,"deptno":30},
      {"empno":6521,"ename":"WARD","job":"ANALYST","sal":400,"deptno":30},
      {"empno":6566,"ename":"JONES","job":"MANAGER","sal":500,"deptno":20},
      {"empno":7654,"ename":"MARTIN","job":"SALESMAN","sal":640,"deptno":30}
      ];

     tempArray:any[] = [];

    constructor()
    {
        this.tempArray = this.empData;
    }



}
