import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICourse} from '../icourse';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCourseComponent implements OnInit {

  @Input() courseObject!: ICourse;
  @Output() save = new EventEmitter<ICourse>();
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
