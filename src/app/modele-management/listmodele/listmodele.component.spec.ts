import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmodeleComponent } from './listmodele.component';

describe('ListmodeleComponent', () => {
  let component: ListmodeleComponent;
  let fixture: ComponentFixture<ListmodeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListmodeleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmodeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
