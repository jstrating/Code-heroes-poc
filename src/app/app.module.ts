import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';

import { RouterModule, Routes } from '@angular/router';
//Component imports
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angularfire2 + firebase imports
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { LeaderboardOverviewComponent } from './leaderboards/leaderboard-overview/leaderboard-overview.component';
import { LeaderboardIndividualCardComponent } from './leaderboards/leaderboard-individual-card/leaderboard-individual-card.component';
import { DashboardOverviewComponent } from './dashboard/dashboard-overview/dashboard-overview.component';
import { LeaderboardsModule } from './leaderboards/leaderboards.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthModule } from './auth/auth.module';
const routes: Routes = [
  { path: '', redirectTo: 'leaderboards', pathMatch: 'full' },
  { path: 'leaderboards', component: LeaderboardOverviewComponent },
  { path: 'dashboard', component: DashboardOverviewComponent },
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LeaderboardsModule,
    DashboardModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(routes, { useHash: true }),
    AngularFireModule.initializeApp(environment.firebase, 'code-heroes'),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AuthModule
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
