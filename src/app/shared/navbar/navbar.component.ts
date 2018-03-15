import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material';
import { MatSidenav } from '@angular/material'; 
import { AuthService } from '../../auth/auth.service';

interface NavigationRoutes {
  name: string;
  url: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public navigationRoutes: Array<NavigationRoutes>;

  constructor(public router: Router, public auth: AuthService) {
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

  @Input()
  public sidemenu: MatSidenav;

  public isOver(): boolean {
    return window.matchMedia(`(max-width: 960px)`).matches;
  }
}
