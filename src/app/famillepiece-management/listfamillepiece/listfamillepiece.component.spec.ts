import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfamillepieceComponent } from './listfamillepiece.component';

describe('ListfamillepieceComponent', () => {
  let component: ListfamillepieceComponent;
  let fixture: ComponentFixture<ListfamillepieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListfamillepieceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListfamillepieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
