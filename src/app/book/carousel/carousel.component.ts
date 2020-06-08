import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images = ['../../images/image1.jpg', '../../images/image2.jpg', '../../images/image3.jpg'];

  constructor() { }


  ngOnInit(): void {
  }

}
