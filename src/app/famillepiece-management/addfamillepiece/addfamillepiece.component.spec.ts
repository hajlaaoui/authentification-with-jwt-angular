import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfamillepieceComponent } from './addfamillepiece.component';

describe('AddfamillepieceComponent', () => {
  let component: AddfamillepieceComponent;
  let fixture: ComponentFixture<AddfamillepieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfamillepieceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfamillepieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
