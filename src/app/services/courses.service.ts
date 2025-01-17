import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  loadCourses(): Observable<Course[]> {
    const params = new HttpParams()
      .set("page", "1")
      .set("pageSize", "10");

    return this.http.get<Course[]>('http://localhost:9000/api/courses', { params });
  }

  saveCourse(course: Course) {

    const headers = new HttpHeaders()
      .set("X-Auth", "userId");

    return this.http.put(`/api/courses/${course.id}`, course, { headers });
  }
}
