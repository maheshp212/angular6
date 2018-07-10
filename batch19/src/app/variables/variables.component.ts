import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent implements OnInit {
	imageSources : string[] = [
	'https://cdn.vox-cdn.com/uploads/chorus_image/image/56748793/dbohn_170625_1801_0018.0.0.jpg',
	'https://cdn-images-1.medium.com/max/2000/1*Nccd2ofdArlXF7v58UK94Q.jpeg',
	'https://cdn.vox-cdn.com/uploads/chorus_asset/file/9278671/jbareham_170917_2000_0124.jpg'
	]
  constructor() { }

  ngOnInit() {
  }

}
