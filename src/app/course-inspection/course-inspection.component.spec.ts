import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInspectionComponent } from './course-inspection.component';

describe('CourseInspectionComponent', () => {
  let component: CourseInspectionComponent;
  let fixture: ComponentFixture<CourseInspectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseInspectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
