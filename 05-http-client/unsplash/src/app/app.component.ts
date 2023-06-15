import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  search: string = ""

  // onChange(event: string){
  //   console.log(event)
  //   this.search = event.toUpperCase
  //   // this.search = event.target.value.toUpperCase()
  // }
}
