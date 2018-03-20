import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  public isOver(): boolean {
    return window.matchMedia(`(max-width: 960px)`).matches;
  }
}
