import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import {Course} from '../course';
import {Component, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseComponent ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('CourseComponent - Class test', () => {
  let component: CourseComponent;

  beforeEach(() => {
    component = new CourseComponent();
    component.courseObject = new Course(
      0,
      'First course',
      '07.12.2018',
      'Description 1',
      '5 hours'
    );
  });

  it('emit id of the courseObject', () => {
    component.delete.subscribe((id: number) => {
      expect(id).toBe(0);
    });
  });

});


describe('CourseComponent - Standalone testing', () => {
  let fixture: ComponentFixture<CourseComponent>;
  let component: CourseComponent;
  let debugButton: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseComponent ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    component.courseObject = new Course(
      1,
      'First course',
      '07.12.2018',
      'Description 1',
      '5 hours'
    );
    debugButton = fixture.debugElement.query(By.css('.btn.btn-danger.btn-sm.ml-2'));
    fixture.detectChanges();
  });

  it('emit id of the courseObject', () => {
    let selectedId: number = 0;

    component.delete.subscribe((id: number) => {
      selectedId = id;
    });
    debugButton.triggerEventHandler('click', null);
    expect(selectedId).toBe(1);
  });
});

@Component({
  template: `
  <app-course [courseObject]="courseObject" (delete)="deleteCourse($event)"></app-course>
  `
})
class CourseHostComponent {
  courseObject = new Course(
    0,
    'First course',
    '07.12.2018',
    'Description 1',
    '5 hours'
  );

  selectedId?: number;

  deleteCourse(id: number) {
    this.selectedId = id;
  }
}

describe('CourseComponent - Test host testing', () => {
  let fixture: ComponentFixture<CourseHostComponent>;
  let component: CourseHostComponent;
  let debugButton: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseComponent, CourseHostComponent]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseHostComponent);
    component = fixture.componentInstance;
    debugButton = fixture.nativeElement.querySelector('.btn.btn-danger.btn-sm.ml-2');
    fixture.detectChanges();
  });

  it('emit id of the courseObject', () => {
    debugButton.click();
    expect(component.selectedId).toBe(0);
  });
});
