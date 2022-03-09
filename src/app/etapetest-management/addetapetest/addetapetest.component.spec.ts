import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddetapetestComponent } from './addetapetest.component';

describe('AddetapetestComponent', () => {
  let component: AddetapetestComponent;
  let fixture: ComponentFixture<AddetapetestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddetapetestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddetapetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
