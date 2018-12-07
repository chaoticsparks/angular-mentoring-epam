import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchQuery = '';

  constructor() { }

  ngOnInit() {
  }

  public consoleSearchQuery() {
    console.log(this.searchQuery);
  }
}
