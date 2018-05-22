import { Directive } from '@angular/core';

@Directive({
  selector: '.appClass'
})
export class ClassDirective {

  constructor() { 

  	// here the Business Logic is same at all places
  	alert('this is class ClassName extends AnotherClass ');
  }

}
