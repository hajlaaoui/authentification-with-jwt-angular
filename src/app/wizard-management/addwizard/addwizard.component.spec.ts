import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddwizardComponent } from './addwizard.component';

describe('AddwizardComponent', () => {
  let component: AddwizardComponent;
  let fixture: ComponentFixture<AddwizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddwizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddwizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
