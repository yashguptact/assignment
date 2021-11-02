import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gradespipe'
})
export class GradespipePipe implements PipeTransform {

  transform(input:number) : string
  {
    let output  = "";

    if( input == 1 ) { 
      output = "Outstanding";
  }
    else if( input == 2)  
    {
      output = "Excellent";
    }
    else if( input == 3)  
    {
      output = "Good";
    }
    else if( input == 4)  
    {
      output = "Average";
    }
    else if( input == 5)  
    {
      output = "Try Again";
    }
    return output;
  }

}
