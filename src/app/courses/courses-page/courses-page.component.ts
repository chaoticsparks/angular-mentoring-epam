import {Component, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {ICourseFetched} from '../ICourseFetched';
import {Router} from '@angular/router';
import {IAppState} from '../../store/reducers';
import {select, Store} from '@ngrx/store';
import {
  FetchCourses,
  IncrementStartFrom, FetchMoreCourses,
  OpenDeleteModal,
  RemoveCourse,
  SearchCourses, CloseDeleteModal,
} from '../../store/actions/courses-page.actions';
import {selectCoursesList, selectNoCurses} from '../../store/selectors/courses-page.selectors';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit, OnDestroy {

  public courses!: ICourseFetched[];
  public noData$ = this.store.pipe(select(selectNoCurses));
  private subscription!: Subscription;

  constructor(
    private router: Router, // Is that ok to still have router there?
    private store: Store<IAppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new FetchCourses());
    this.subscription = this.store.pipe(select(selectCoursesList)).subscribe((courses: ICourseFetched[]) => { // Is that ok to add local variable to subscribe there?
      this.courses = courses;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public loadMore() {
    this.store.dispatch(new IncrementStartFrom()); // Is that ok to dispatch one action after another?
    this.store.dispatch(new FetchMoreCourses());
  }

  public search(searchQuery: string): void {
    if (searchQuery) {
      this.store.dispatch(new SearchCourses(searchQuery));
    } else {
      this.store.dispatch(new FetchCourses());
    }
  }

  public deleteCourse() {
    this.store.dispatch(new RemoveCourse());
  }

  public openModal(template: TemplateRef<any>, id: number) {
    this.store.dispatch(new OpenDeleteModal({template, id}));
  }

  public closeModal() {
    this.store.dispatch((new CloseDeleteModal()));
  }

  public editCourse(id: number) {
    this.router.navigate(['courses', id]);
  }

}
