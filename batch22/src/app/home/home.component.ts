import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
height:string;
imageSources:string[] ;

  constructor() { 

  	this.height = '100%';

  	this.imageSources = [
  		'https://firebasestorage.googleapis.com/v0/b/fir-americansecurestorage.appspot.com/o/stock-red-units.jpeg?alt=media&token=d6968f4d-0ca8-4bb8-8cea-a5040a284f44',
  		'https://firebasestorage.googleapis.com/v0/b/fir-americansecurestorage.appspot.com/o/stock-gate.jpeg?alt=media&token=bc11905a-93fb-4c27-9f76-bdd5663206ca',
  		'https://firebasestorage.googleapis.com/v0/b/fir-americansecurestorage.appspot.com/o/stock-dollies.jpeg?alt=media&token=9bb3cb23-2be9-4146-a603-2afde4bec626'

  	];
  }

  

}
