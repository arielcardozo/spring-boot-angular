import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{
  collapsed = true;
  private userSub: Subscription;
  isAuthenticated = false;

  constructor( private authService: AuthService) {
  }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe( user => {
      this.isAuthenticated = !!user;
      console.log("isAuthenticated: "+ !user);
      console.log("isAuthenticated2: "+ !!user);
    });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
