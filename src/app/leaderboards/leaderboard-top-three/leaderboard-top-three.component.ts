import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-leaderboard-top-three',
  templateUrl: './leaderboard-top-three.component.html',
  styleUrls: ['./leaderboard-top-three.component.scss']
})
export class LeaderboardTopThreeComponent implements OnInit {

  @Input() users: object;

  constructor() { }

  ngOnInit() {
  }

}
