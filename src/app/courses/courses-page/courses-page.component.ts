import {Component, OnInit, TemplateRef} from '@angular/core';
import {ICourseFetched} from '../ICourseFetched';
import {CoursesService} from '../courses.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Router} from '@angular/router';
import {backendConfig} from '../../../config.enum';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {

  public courses!: ICourseFetched[];
  public noData = false;
  public modalRef!: BsModalRef;
  private courseToDelete!: number;
  private startingPage = 0;

  constructor(
    private coursesService: CoursesService,
    private modalService: BsModalService,
    private router: Router) {
  }

  ngOnInit() {
    this.coursesService.getList().subscribe((courses: ICourseFetched[]) => {
      this.courses = courses;
    });
  }

  public loadMore() {
    this.coursesService.getList(++this.startingPage * backendConfig.CoursesOnPage)
      .subscribe((courses: ICourseFetched[]) => {
        this.courses = [ ...this.courses, ...courses];
        if (courses.length === 0) {
          console.log(courses);
          this.noData = true;
        }
      });
  }

  public search(searchQuery: string): void {
    if (searchQuery) {
      this.coursesService.findCourse(searchQuery)
        .subscribe((courses: ICourseFetched[]) => {
          this.courses = courses;
        });
    } else {
      this.coursesService.getList()
        .subscribe((courses: ICourseFetched[]) => {
          this.courses = courses;
        });
    }
  }

  public deleteCourse() {
    this.coursesService.removeCourse(this.courseToDelete).subscribe(() => {
      this.modalRef.hide();
      this.coursesService.getList()
        .subscribe((courses: ICourseFetched[]) => {
          this.courses = courses;
        });
    });
  }

  public openModal(template: TemplateRef<any>, id: number) {
    this.modalRef = this.modalService.show(template);
    this.courseToDelete = id;
  }

  public editCourse(id: number) {
    this.router.navigate(['courses', id]);
  }

}
