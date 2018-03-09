import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material';

interface NavigationRoutes {
  name: string;
  url: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public navigationRoutes: Array<NavigationRoutes>;

  constructor(public router: Router) {
    this.navigationRoutes = [
        {
          name: 'Leaderboards',
          url: 'leaderboards'
        },
        {
          name: 'Dashboard',
          url: 'dashboard'
        }
    ]
  }
  navigate(event: MatTabChangeEvent) {
    this.router.navigateByUrl(event.tab.textLabel.toLowerCase());
  
  }
  ngOnInit() {
  }

}
