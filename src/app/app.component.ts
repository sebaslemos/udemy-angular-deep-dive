import { Component, Injector, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_CONFIG, CONFIG_TOKEN } from './config';
import { Course } from './model/course';
import { CoursesService } from './services/courses.service';
import { COURSES } from 'src/db-data';
import { CourseTitleComponent } from './course-title/course-title.component';
import { createCustomElement } from '@angular/elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  courses: Course[] = COURSES;

  constructor(private coursesService: CoursesService,
    private injector: Injector
  ) {

  }

  ngOnInit() {
    // this.courses$ = this.coursesService.loadCourses();
    const htmlElement = createCustomElement(CourseTitleComponent, { injector: this.injector });
    customElements.define('course-title', htmlElement);
  }

  save(course: Course) {
    this.coursesService.saveCourse(course)
      .subscribe(
        () => console.log('Course saved!')
      );
  }

  onEditCourse() {
    // const course = this.courses[0];

    // this.courses[0].description = 'new Value';
  }



}
