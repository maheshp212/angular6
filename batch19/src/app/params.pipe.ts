import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'params'
})
export class ParamsPipe implements PipeTransform {

  transform(x: any, p1,p2,p3=0): any {
    return x*(p1+p2+p3);
  }

}
