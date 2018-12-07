import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Course } from '../course';
import { ICourse } from '../icourse';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public courses!: ICourse[];

  constructor() { }

  ngOnInit() {
    this.courses = [
      new Course(
        0,
        'First course',
        '07.12.2018',
        'Description 1',
        '5 hours'
      ),
      new Course(
        1,
        'Second course',
        '08.12.2018',
        'Description 2',
        '1 hours'
      ),
      new Course(
        2,
        'Third course',
        '09.12.2018',
        'Description 3',
        '2 hours'
      ),
      new Course(
        3,
        'Fourth course',
        '10.12.2018',
        'Description 4',
        '1 hours'
      ),
      new Course(
        4,
        'Fifth course',
        '11.12.2018',
        'Description 5',
        '30 minutes'
      ),
    ];
  }

  public deleteCourse(courseId: number) {
    console.log(courseId);
  }

  public loadMore() {
    console.log('Loadimg more...');
  }

}
