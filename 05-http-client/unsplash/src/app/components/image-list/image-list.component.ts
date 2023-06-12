import { Component } from '@angular/core';
import { UnsplashService } from 'src/app/services/unsplash.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent {

  images: any[] = [];


  constructor(
    private _unsplashService: UnsplashService
  ) { }

  onInit() {
    this._unsplashService.getFotos().subscribe(
      value => this.images = value
    )

}
