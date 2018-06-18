import { Directive } from '@angular/core';

@Directive({
  selector: '.appClass'
})
export class ClassDirective {

  constructor() { 
  	alert('calls directive');
  }

}
