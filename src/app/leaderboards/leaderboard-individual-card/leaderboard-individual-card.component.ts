import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-leaderboard-individual-card',
  templateUrl: './leaderboard-individual-card.component.html',
  styleUrls: ['./leaderboard-individual-card.component.scss']
})
export class LeaderboardIndividualCardComponent implements OnInit {

  users: any;
  db: any;


  constructor(db: AngularFirestore) { 
    this.db = db;
    this.getUsers();
  
  }
  
  async getUsers(){
    await this.db.collection('/games/c4lUBr3vo4onHKBQIOJh/players').valueChanges().subscribe(data => {
     this.users =  this.sortByScore(data);
    })
  }

  sortByScore(array) {
      array.sort((a: any, b: any) => {
        if (a.score > b.score) {
          return -100;
        } else if (a.score < b.score) {
          return 100;
        } else {
          return 0;
        }
      });
      return array;
  }

  ngOnInit() {
  }

}