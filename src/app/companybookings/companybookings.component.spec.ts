import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanybookingsComponent } from './companybookings.component';

describe('CompanybookingsComponent', () => {
  let component: CompanybookingsComponent;
  let fixture: ComponentFixture<CompanybookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanybookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanybookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
