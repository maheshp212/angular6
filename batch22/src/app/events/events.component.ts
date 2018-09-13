import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

	count = 0;
  constructor() { }

  ngOnInit() {
  }

  callMe(){
  	console.log(this.count);
  	this.count++;
  }

}
