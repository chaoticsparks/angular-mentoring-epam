import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICourseFetched} from '../ICourseFetched';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseFormComponent implements OnInit {

  @Input() courseObject!: ICourseFetched;
  @Output() save = new EventEmitter<ICourseFetched>();
  @Output() decline = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  public submit() {
    console.log('Form submitted');
    this.save.emit(this.courseObject);
  }

  public cancel() {
    console.log('Form canceled');
    this.decline.emit(true);
  }
}
