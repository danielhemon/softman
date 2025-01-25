import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  isMenuVisible = false;

  constructor(private loginService: LoginService, private router: Router) {}

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  hideMenu() {
    this.isMenuVisible = false;
  }

  onManageProfile() {
    this.router.navigateByUrl('/home/profile');
  }

  onLogout() {
    this.loginService.clearUserData();
    this.router.navigateByUrl('/login');
  }

  onGoToRecord() {
    this.router.navigateByUrl('/home/record');
  }
}
