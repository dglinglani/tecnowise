import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursecCollisionsComponent } from './coursec-collisions.component';

describe('CoursecCollisionsComponent', () => {
  let component: CoursecCollisionsComponent;
  let fixture: ComponentFixture<CoursecCollisionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursecCollisionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursecCollisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
