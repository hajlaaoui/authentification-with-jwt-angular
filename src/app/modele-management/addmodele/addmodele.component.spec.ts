import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmodeleComponent } from './addmodele.component';

describe('AddmodeleComponent', () => {
  let component: AddmodeleComponent;
  let fixture: ComponentFixture<AddmodeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmodeleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmodeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
