import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardOverviewComponent } from './leaderboard-overview/leaderboard-overview.component';
import { LeaderboardIndividualCardComponent } from './leaderboard-individual-card/leaderboard-individual-card.component';
import { MatCardModule, MatGridListModule, MatListModule } from '@angular/material';
import { LeaderboardItemComponent } from './leaderboard-item/leaderboard-item.component';
import { LeaderboardTopThreeComponent } from './leaderboard-top-three/leaderboard-top-three.component';
import { LeaderboardGameCardComponent } from './leaderboard-game-card/leaderboard-game-card.component';
@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule
  ],
  declarations: [LeaderboardOverviewComponent, LeaderboardIndividualCardComponent, LeaderboardItemComponent, LeaderboardTopThreeComponent, LeaderboardGameCardComponent],
  exports: [LeaderboardIndividualCardComponent, LeaderboardOverviewComponent]
})
export class LeaderboardsModule { }
