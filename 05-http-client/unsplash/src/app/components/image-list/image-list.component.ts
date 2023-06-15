import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Image } from 'src/app/model/image';
import { UnsplashService } from 'src/app/services/unsplash.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss'],
})
export class ImageListComponent implements OnInit , OnChanges{

  // public images: Image[] = [];

  @Input('search')
  search: string;

  constructor(public unsplashService: UnsplashService) {
    this.search= ""
    // this.unsplashService.fotos$.subscribe(
    //   fotos => this.images = fotos
    // )
  }

  ngOnInit() {
    console.log("on init")
    this.unsplashService.getFotos(this.search)
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log("onchanges", changes)
      this.unsplashService.getFotos(this.search)
  }

  moreFotos() {
    this.unsplashService.moreFotos()
  }
}
