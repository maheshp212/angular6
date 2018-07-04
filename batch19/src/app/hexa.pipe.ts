import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hexaaaaa'
})
export class HexaPipe implements PipeTransform {

  transform(inp: any): any {
    return inp.toString(16);
  }

}
