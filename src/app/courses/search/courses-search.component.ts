import {ChangeDetectionStrategy, Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Observable, Observer, Subject} from 'rxjs';
import {debounce, debounceTime, filter} from 'rxjs/operators';

@Component({
  selector: 'app-courses-search',
  templateUrl: './courses-search.component.html',
  styleUrls: ['./courses-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesSearchComponent implements OnInit {

  constructor() { }

  @Output() search = new EventEmitter<string>();
  private search$ = new Subject<string>();

  ngOnInit(): void {
    this.search$
      .pipe(
        filter((query: string) => query.length >= 3 || query.length === 0),
        debounceTime(500)
      )
      .subscribe((searchQuery) => {
      this.search.emit(searchQuery);
    });
  }

  public toSearch(searchQuery: string) {
    this.search$.next(searchQuery);
  }
}
