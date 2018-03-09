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
import { LeaderboardsComponent } from './leaderboards/leaderboards.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: 'leaderboards', pathMatch: 'full'},
  {path: 'leaderboards', component: LeaderboardsComponent},
  {path: 'dashboard', component: LeaderboardsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LeaderboardsComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(routes, {useHash: true}),
    AngularFireModule.initializeApp(environment.firebase, 'code-heroes'),
    AngularFirestoreModule,
    AngularFireDatabaseModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
