import {Component, OnInit, TemplateRef} from '@angular/core';
import { ICourse } from '../icourse';
import {CoursesService} from '../courses.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {

  public courses!: ICourse[];
  public noData = false;
  public modalRef!: BsModalRef;
  private courseToDelete!: number;

  constructor(
    private coursesService: CoursesService,
    private modalService: BsModalService,
    private router: Router) { }

  ngOnInit() {
    this.courses = this.fetchCourses();
  }

  private fetchCourses(): ICourse[] {
     return this.coursesService.getList();
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

  public deleteCourse() {
    this.coursesService.removeCourse(this.courseToDelete);
    this.modalRef.hide();
    this.courses = this.fetchCourses();
  }

  public openModal(template: TemplateRef<any>, id: number) {
    this.modalRef = this.modalService.show(template);
    this.courseToDelete = id;
  }

  public editCourse(id: number) {
    this.router.navigate(['courses', id]);
  }

}
