import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

  public searchQuery = '';

  constructor() { }

  @Output() search = new EventEmitter<string>();

  ngOnInit() {
  }

  public toSearch() {
    console.log(this.searchQuery);
    this.search.emit(this.searchQuery);
  }
}
