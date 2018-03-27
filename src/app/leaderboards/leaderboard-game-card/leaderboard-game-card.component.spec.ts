import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardGameCardComponent } from './leaderboard-game-card.component';

describe('LeaderboardGameCardComponent', () => {
  let component: LeaderboardGameCardComponent;
  let fixture: ComponentFixture<LeaderboardGameCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderboardGameCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardGameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
