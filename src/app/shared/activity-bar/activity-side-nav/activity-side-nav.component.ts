import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment/moment';

export interface Score {
  category: string,
  dayKey: string,
  description: string,
  game: string,
  monthKey: string,
  player: string,
  score: number,
  time: Date,
  weekKey: string
}

export interface ScoreId extends Score { id: string; }

@Component({
  selector: 'app-activity-side-nav',
  templateUrl: './activity-side-nav.component.html',
  styleUrls: ['./activity-side-nav.component.scss']

})
export class ActivitySideNavComponent implements OnInit {
  activity: any;
  dateObj = new Date();
  date = moment().format('MMMM Do YYYY');
  dayKey = moment().format('YYYYMMDD');
  
  private scoresCollection: AngularFirestoreCollection<Score>;
  scores = [];

  constructor(db: AngularFirestore) {
    const maxItems = 20;
    
    this.scoresCollection = db.collection('scores', ref => ref.orderBy('time', 'desc').limit(maxItems));
    this.scoresCollection.stateChanges(['added', 'removed']).subscribe(data => {
      console.log(data);
      return data.map(s => {
        const data = s.payload.doc.data() as Score;
        if (s.payload.type === 'added') {
          this.scores.push(data);
          this.scores.sort(function compare(a, b) {
            var dateA = +new Date(a.time);
            var dateB = +new Date(b.time);
            return dateA - dateB;
          }).reverse();

          if(this.scores.length > maxItems) {
            this.scores.splice(maxItems);
          }
        } 
  
      })
    });
    
   
  }


  ngOnInit() {
  }

}
