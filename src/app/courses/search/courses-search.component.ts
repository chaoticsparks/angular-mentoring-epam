import {ChangeDetectionStrategy, Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Observable, Observer, Subject} from 'rxjs';
import {debounce, debounceTime, filter} from 'rxjs/operators';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-courses-search',
  templateUrl: './courses-search.component.html',
  styleUrls: ['./courses-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesSearchComponent implements OnInit {

  constructor() { }

  public inputSearch = new FormControl('');

  @Output() search = new EventEmitter<string>();

  ngOnInit(): void {
    this.inputSearch.valueChanges
      .pipe(
        filter((query: string) => query.length >= 3 || query.length === 0),
        debounceTime(500)
      )
      .subscribe((searchQuery) => {
      this.search.emit(searchQuery);
    });
  }
}
