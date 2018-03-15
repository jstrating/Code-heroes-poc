import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaderboard-top-three',
  templateUrl: './leaderboard-top-three.component.html',
  styleUrls: ['./leaderboard-top-three.component.scss']
})
export class LeaderboardTopThreeComponent implements OnInit {

  winner = {
    name: 'Jesper',
    role: 'Frontend',
    points: 100,
    positionChange: 'unchanged',
    avatar: "url(" +'https://avatars1.githubusercontent.com/u/10846244?s=400&u=8f3cfe2e8b4cf78226a8138e166270cc243ab1c8&v=4' +')'
  }

  second = {
    name: 'Arwin',
    role: 'Backend',
    points: 50,
    positionChange: 'increase',
    avatar: 'url(' + 'https://avatars0.githubusercontent.com/u/9743543?s=400&v=4' + ')'
  }

  third = {
    name: 'Michael',
    role: 'Fullstack',
    points: 30,
    positionChange: 'decrease',
    avatar: 'url(' + 'https://avatars0.githubusercontent.com/u/7045335?s=400&v=4' + ')'
  }
  constructor() { }

  ngOnInit() {
  }

}
