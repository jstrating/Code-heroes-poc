import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardIndividualCardComponent } from './leaderboard-individual-card.component';

describe('LeaderboardIndividualCardComponent', () => {
  let component: LeaderboardIndividualCardComponent;
  let fixture: ComponentFixture<LeaderboardIndividualCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderboardIndividualCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardIndividualCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
