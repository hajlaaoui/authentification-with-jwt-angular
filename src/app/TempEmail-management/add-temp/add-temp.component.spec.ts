import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTempComponent } from './add-temp.component';

describe('AddTempComponent', () => {
  let component: AddTempComponent;
  let fixture: ComponentFixture<AddTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
