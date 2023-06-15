import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  search: string = "";

  @Output('search')
  private searchEmitter: EventEmitter<string> = new EventEmitter()

  buscar(){
    this.searchEmitter.emit(this.search)
  }

}
