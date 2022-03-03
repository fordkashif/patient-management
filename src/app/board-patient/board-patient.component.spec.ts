import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardPatientComponent } from './board-patient.component';

describe('BoardPatientComponent', () => {
  let component: BoardPatientComponent;
  let fixture: ComponentFixture<BoardPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
