import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hexazzzz'
})
export class HexaPipe implements PipeTransform {

  transform(x: number): any {
    return x.toString(16);
  }

}
