import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataArray:any[] =  [
    {"empno":6589,"ename":"SRIRAM","job":"MANAGER","sal":3200,"deptno":30},
    {"empno":7369,"ename":"SMITH","job":"CLERK","sal":800,"deptno":20},
    {"empno":7499,"ename":"ALLEN","job":"SALESMAN","sal":1600,"deptno":30},
    {"empno":7521,"ename":"WARD","job":"ANALYST","sal":1250,"deptno":30},
    {"empno":7566,"ename":"JONES","job":"MANAGER","sal":2975,"deptno":20},
    {"empno":7654,"ename":"MARTIN","job":"SALESMAN","sal":1250,"deptno":30},
    {"empno":7698,"ename":"BLAKE","job":"MANAGER","sal":2850,"deptno":30},
    {"empno":7782,"ename":"CLARK","job":"MANAGER","sal":2450,"deptno":10},
    {"empno":7839,"ename":"KING","job":"PRESIDENT","sal":5000,"deptno":10},
    {"empno":7844,"ename":"TURNER","job":"SALESMAN","sal":1500,"deptno":30},
    {"empno":7876,"ename":"ADAMS","job":"CLERK","sal":1100,"deptno":20},
    {"empno":7900,"ename":"JAMES","job":"CLERK","sal":950,"deptno":30},
    {"empno":7902,"ename":"FORD","job":"ANALYST","sal":3000,"deptno":20},
    {"empno":8545,"ename":"KIRAN","job":"MANAGER","sal":5890,"deptno":10}
    ];
  constructor() { }

  getData():any[]
  {
   // alert("Message from DataService");
    return this.dataArray;
  }

  addData(dataObj:any) : void
  {
      this.dataArray.push(dataObj);
  }

  removeData(id:number) : void
  {
      let index  = this.dataArray.findIndex(dataObj => dataObj.empno == id);
      this.dataArray.splice(index, 1);
  }


}
