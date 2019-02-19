import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-courses-search',
  templateUrl: './courses-search.component.html',
  styleUrls: ['./courses-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesSearchComponent implements OnInit {

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
