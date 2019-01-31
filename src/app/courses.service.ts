import { Injectable } from '@angular/core';
import {Course} from './course';
import {ICourse} from './icourse';
import {ICourseService} from './icourse-service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  static id = 5;

  private courses = [
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

  constructor() { }

  private findCourseById(id: number): ICourse | undefined {
    return this.courses.find((course) => course.id === id);
  }

  public getList(): ICourse[] {
    return this.courses;
  }

  public createCourse(course: ICourseService) {
    this.courses.push({
      id: CoursesService.id++,
      ...course
    });
  }

  public getCourseById(id: number): ICourse | undefined {
    return this.findCourseById(id);
  }

  public updateItem(id: number, newcourse: ICourse): boolean {
    const courseToUpdate = this.findCourseById(id);
    if (courseToUpdate) {
      this.courses[this.courses.indexOf(courseToUpdate)] = {
        ...courseToUpdate,
        ...newcourse
      };
      return true;
    } else {
      throw Error('Course to update not founded!');
    }
  }

  public removeCourse(id: number) {
    this.courses = this.courses.filter((course) => course.id !== id);
  }
}
