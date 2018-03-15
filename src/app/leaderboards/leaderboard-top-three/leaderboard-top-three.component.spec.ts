import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardTopThreeComponent } from './leaderboard-top-three.component';

describe('LeaderboardTopThreeComponent', () => {
  let component: LeaderboardTopThreeComponent;
  let fixture: ComponentFixture<LeaderboardTopThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderboardTopThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardTopThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
