import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hexaaaa'
})
export class HexaPipe implements PipeTransform {

  transform(inp: any): any {
    return inp.toString(16);
  }

}
/*

app.filter('hexa' , function(){
	
	return function(x){
		// BL
	}
})
*/