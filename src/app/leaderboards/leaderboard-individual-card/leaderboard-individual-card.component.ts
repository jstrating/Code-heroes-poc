import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard-individual-card',
  templateUrl: './leaderboard-individual-card.component.html',
  styleUrls: ['./leaderboard-individual-card.component.scss']
})
export class LeaderboardIndividualCardComponent implements OnInit {
  user = {
    name: "Jesper Strating",
    role: "Frontend",
    points: "10",
    positionChange: "increase",
    avatar: "url(" +'https://avatars1.githubusercontent.com/u/10846244?s=400&u=8f3cfe2e8b4cf78226a8138e166270cc243ab1c8&v=4' +')'
  }

  constructor() { }
 
  ngOnInit() {
  }

}
