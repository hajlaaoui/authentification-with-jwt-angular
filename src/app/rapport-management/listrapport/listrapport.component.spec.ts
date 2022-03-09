import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrapportComponent } from './listrapport.component';

describe('ListrapportComponent', () => {
  let component: ListrapportComponent;
  let fixture: ComponentFixture<ListrapportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListrapportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListrapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
