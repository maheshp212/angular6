import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }
  count: number = 0
  ngOnInit() {
  }
  callMe(){
  	console.log(this.count);
  	this.count++;
  }
}
