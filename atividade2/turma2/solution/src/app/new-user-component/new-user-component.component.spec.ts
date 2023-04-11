import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserComponentComponent } from './new-user-component.component';

describe('NewUserComponentComponent', () => {
  let component: NewUserComponentComponent;
  let fixture: ComponentFixture<NewUserComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUserComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
