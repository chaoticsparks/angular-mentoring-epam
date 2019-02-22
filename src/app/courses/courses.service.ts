import {Injectable} from '@angular/core';
import {ICourseFetched} from './ICourseFetched';
import {ICourse} from './i-course';
import {Course} from './course';
import {HttpClient} from '@angular/common/http';
import {backendConfig} from '../../config.enum';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  static id = 5;

  constructor(private http: HttpClient) {
  }

  public getList(startFrom: number = 0): Observable<ICourseFetched[]> {
    return this.http.get<ICourseFetched[]>(backendConfig.apiUrl + 'courses?start=' + startFrom + '&count=' + backendConfig.CoursesOnPage);
  }

  public createCourse(course: ICourse): Observable<any> {
    return this.http.post(backendConfig.apiUrl + 'courses/', course);
  }

  public getCourseById(id: number): Observable<ICourseFetched> {
    return this.http.get<ICourseFetched>(backendConfig.apiUrl + 'courses/' + id);
  }

  public updateItem(id: number, newcourse: ICourseFetched): Observable<any> {
    return this.http.put(backendConfig.apiUrl + 'courses/' + id, newcourse);
  }

  public findCourse(query: string): Observable<ICourseFetched[]> {
    return this.http.get<ICourseFetched[]>(backendConfig.apiUrl + 'courses?textFragment=' + query);
  }

  public removeCourse(id: number): Observable<any> {
    return this.http.delete(backendConfig.apiUrl + 'courses/' + id);
  }
}
