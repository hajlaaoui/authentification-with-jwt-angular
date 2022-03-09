import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListetapetestComponent } from './listetapetest.component';

describe('ListetapetestComponent', () => {
  let component: ListetapetestComponent;
  let fixture: ComponentFixture<ListetapetestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListetapetestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListetapetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
