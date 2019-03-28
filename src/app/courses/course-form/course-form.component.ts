import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ICourseFetched} from '../ICourseFetched';
import {FormBuilder, Validators} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {dateFormatValidator} from '../input-date/input-date.component';
import {courseDurationInputTypeValidator} from '../input-duration/input-duration.component';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseFormComponent implements OnInit, OnDestroy {

  @Input() courseObject$!: Observable<ICourseFetched>;
  @Output() save = new EventEmitter<ICourseFetched>();
  @Output() decline = new EventEmitter<boolean>();

  private subscription!: Subscription;

  courseForm = this.fb.group({
    title: ['', [
      Validators.required,
      Validators.maxLength(50)
    ]],
    description: ['',
      [
        Validators.required,
        Validators.maxLength(500)
      ]],
    date: ['', [
      Validators.required,
      dateFormatValidator
    ]],
    duration: ['', [
      Validators.required,
      courseDurationInputTypeValidator
    ]],
   authors: ['', [
     Validators.required
   ]]
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.subscription = this.courseObject$.subscribe((courseObject) => {
      const d = new Date(courseObject.date);
      this.courseForm.setValue({
        title: courseObject.name,
        description: courseObject.description,
        date: `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`,
        duration: courseObject.length,
        authors: courseObject.authors
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public submit() {
    console.log('Form submitted');
    // this.save.emit(this.courseObject);
  }

  public cancel() {
    console.log('Form canceled');
    this.decline.emit(true);
  }

  get title() {
    return this.courseForm.get('title');
  }

  get description() {
    return this.courseForm.get('description');
  }

  get date() {
    return this.courseForm.get('date');
  }

  get duration() {
    return this.courseForm.get('duration');
  }

  get authors() {
    return this.courseForm.get('authors');
  }
}
