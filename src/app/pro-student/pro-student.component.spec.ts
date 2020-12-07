import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProStudentComponent } from './pro-student.component';

describe('ProStudentComponent', () => {
  let component: ProStudentComponent;
  let fixture: ComponentFixture<ProStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
