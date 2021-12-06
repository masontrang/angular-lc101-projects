import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Tesla Photos';
  image1 = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-tesla-model-3-mmp-1-1602871915.jpg?crop=0.787xw:0.708xh;0.109xw,0.197xh&resize=240:*';
  image2 = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-tesla-model-3-long-range-103-1627583154.jpg?crop=1xw:1xh;center,top&resize=240:*';
  image3 = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-tesla-model-3-108-1574807027.jpg?crop=0.920xw:1.00xh;0.0801xw,0&resize=240:*';

  constructor() { }

  ngOnInit() {
  }

}