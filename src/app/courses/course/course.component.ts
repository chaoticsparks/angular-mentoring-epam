import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ICourseFetched} from '../ICourseFetched';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit, OnChanges {

  @Input() courseObject!: ICourseFetched;
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges', changes);
  }

  ngOnInit() {
    console.log('OnInit');
  }

  public deleteCourse(id: number) {
    this.delete.emit(id);
  }

  public editCourse(id: number) {
    this.edit.emit(id);
  }

}
