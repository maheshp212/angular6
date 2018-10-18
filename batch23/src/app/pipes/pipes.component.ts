import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }
fname = 'qShoRE';
age = 23;
user = {name:'angular', age: 5};
today = new Date();
  ngOnInit() {
  }

}
