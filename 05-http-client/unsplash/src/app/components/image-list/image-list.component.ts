import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/model/image';
import { UnsplashService } from 'src/app/services/unsplash.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss'],
})
export class ImageListComponent implements OnInit {

  public images: Image[] = [];

  constructor(private _unsplashService: UnsplashService) {}

  ngOnInit() {
    this._unsplashService.getFotos('dogs').subscribe((value) => {
      console.log(value.results)
      this.images = value.results;
      console.log(this.images)
    });
  }
}
