import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hexaaaaa'
})
export class HexaPipe implements PipeTransform {

  transform(x): any {
    return x.toString(16);
  }

}
