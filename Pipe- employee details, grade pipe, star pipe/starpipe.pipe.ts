import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starpipe'
})
export class StarpipePipe implements PipeTransform {

  transform(input:number) : string[]
  {
    let output:string[]  = [];
for(let i=1; i<=5; i++){
  if(i<= input){
    output.push("https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Star%2A.svg/1200px-Star%2A.svg.png");
  } else{
    output.push("https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1200px-Five-pointed_star.svg.png");
  }
}
    
    return output;
  }

}