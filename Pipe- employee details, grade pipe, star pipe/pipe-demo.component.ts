import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent{

  public empArray:any[]  =
  [
    {sno: 1, ename  :  "Smith",  grade:  1},
    {sno: 2, ename  :  "Scott",  grade:  2},
    {sno: 3, ename  :  "Nancy",  grade:  3},
    {sno: 4, ename  :  "Ruth",  grade:  4},
    {sno: 5, ename  :  "Testname",  grade:  5}
  ];

}
