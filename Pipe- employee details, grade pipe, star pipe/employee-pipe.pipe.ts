import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeePipe'
})
export class EmployeePipePipe implements PipeTransform {

  transform(input:any[], minValue:number, maxValue:number): any[]
   {
      let output:any[] = [];
      output =   input.filter( item =>(item.sal>=[minValue]) && (item.sal<=[maxValue]));
      return output;
    }

}
