import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStudentComponentComponent } from './new-student-component.component';

describe('NewStudentComponentComponent', () => {
  let component: NewStudentComponentComponent;
  let fixture: ComponentFixture<NewStudentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewStudentComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewStudentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
