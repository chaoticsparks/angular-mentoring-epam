import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {Observable, of, Subject, timer} from 'rxjs';
import {debounce, debounceTime, map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {backendConfig} from '../../../config.enum';
import {IAuthorFetched} from '../IAuthorFetched';
import {ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';

export function courseAuthorsInputValidator(c: FormControl) {
  const err = {
    noAuthors: true,
  };

  return c.value.length <= 0 ? err : null;
}

@Component({
  selector: 'app-input-authors',
  templateUrl: './input-authors.component.html',
  styleUrls: ['./input-authors.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputAuthorsComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useValue: courseAuthorsInputValidator,
      multi: true
    }
  ]
})
export class InputAuthorsComponent implements OnInit, ControlValueAccessor {
  @Input() isInvalid = false;
  @Input() errors = {};
  public disabled = false;
  private searchQuery$ = new Subject<string>();
  public authors$?: Observable<IAuthorFetched[]>;
  public selectedAuthors: IAuthorFetched[] = [];

  public propagateChange = (v: any) => {};
  public propagateTouched = (v: any) => {};

  constructor(private http: HttpClient) { }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: IAuthorFetched[]): void {
    this.selectedAuthors = obj;
  }

  public selectAuthor(author: IAuthorFetched) {
    this.selectedAuthors.push(author);
    this.propagateChange(this.selectedAuthors);
    this.searchQuery$.next('');
  }

  public selectAuthorOnTouched() {
    this.propagateTouched(this.selectedAuthors);
  }

  public removeAuthor(id: string) {
    this.selectedAuthors = this.selectedAuthors.filter((selectedAuthor) => selectedAuthor.id !== id);
    this.propagateChange(this.selectedAuthors);
  }

  ngOnInit() {
    this.authors$ = this.searchQuery$.pipe(
      debounce((query) => query ? timer(300) : timer(0)),
      switchMap((query) => query ? this.http.get<IAuthorFetched[]>(backendConfig.apiUrl + 'authors?textFragment=' + query) : of([])),
      map((authors) => {
        return authors.filter((author) => !this.selectedAuthors.find((selectedAuthor) => selectedAuthor.id === author.id));
      })
    );
  }

  public searchAuthors(query: string) {
    this.searchQuery$.next(query);
  }
}
