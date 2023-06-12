import { Component, Input } from '@angular/core';
import { Image } from 'src/app/model/image';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.scss']
})
export class ImageItemComponent {

  @Input('image')
  image: Image = {} as Image





}
