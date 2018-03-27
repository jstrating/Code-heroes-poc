import { Component, OnInit, Input } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';


@Component({
  selector: 'app-activity-feed-item',
  templateUrl: './activity-feed-item.component.html',
  styleUrls: ['./activity-feed-item.component.scss']
})
export class ActivityFeedItemComponent implements OnInit {

  @Input() score: any;
  private dbRef: AngularFirestore;
  user: any;
  scoreDescription: string;

  constructor(db: AngularFirestore) {
    this.dbRef = db;
  }

  ngOnInit() {
    this.dbRef.collection('users').doc(this.score.player).valueChanges().subscribe(data => {
      this.user = data;
    });

    switch (this.score.description) {
      case 'BUILD_PASS':
        this.scoreDescription = 'Build passed'
        break;
      case 'ISSUE_CLOSED':
        this.scoreDescription = 'Issue closed'
        break;
      case 'MERGE':
        this.scoreDescription = 'Merged branch'
        break;
      case 'BUILD_FAIL':
        this.scoreDescription = 'Failed build'
        break;
      case 'PULL_REQUEST':
        this.scoreDescription = 'Pull request'
        break;
      case 'COMMIT':
        this.scoreDescription = 'Pushed commit'
        break;
      case 'DEPLOY':
        this.scoreDescription = 'Deployed build'
        break;


    }
  }

}
