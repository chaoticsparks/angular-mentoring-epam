import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { ICourse } from '../icourse';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public courses!: ICourse[];
  public noData = false;

  constructor() { }

  ngOnInit() {
    this.courses = this.fetchCourses();
  }

  private fetchCourses(): ICourse[] {
     return [
      new Course(
        0,
        'First course',
        new Date(2018, 12 - 1, 7),
        'Description 1',
        12,
        true,
      ),
      new Course(
        1,
        'Second course',
        new Date(2019, 2 - 1, 19),
        'Description 2',
        42,
        true,
      ),
      new Course(
        2,
        'Third course',
        new Date(2019, 1 - 1, 17),
        'Description 3',
        320,
        false,
      ),
      new Course(
        3,
        'Fourth course',
        new Date(2018, 12 - 1, 10),
        'Description 4',
        122,
        false,
      ),
      new Course(
        4,
        'Fifth course',
        new Date(2018, 12 - 1, 11),
        'Description 5',
        160,
        false
      ),
    ];
  }

  public deleteCourse(courseId: number) {
    console.log(courseId);
  }

  public loadMore() {
    console.log('Loadimg more...');
    this.noData = true;
  }

  public search(searchQuery: string): void {
    if (searchQuery) {
      this.courses = this.fetchCourses().filter((course: ICourse) => {
        return course.title.toLowerCase().includes(searchQuery.toLowerCase());
      });
    } else {
      this.courses = this.fetchCourses();
    }
  }

}
