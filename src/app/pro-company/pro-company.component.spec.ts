import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProCompanyComponent } from './pro-company.component';

describe('ProCompanyComponent', () => {
  let component: ProCompanyComponent;
  let fixture: ComponentFixture<ProCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
