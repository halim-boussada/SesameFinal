import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbookingsComponent } from './sbookings.component';

describe('SbookingsComponent', () => {
  let component: SbookingsComponent;
  let fixture: ComponentFixture<SbookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
