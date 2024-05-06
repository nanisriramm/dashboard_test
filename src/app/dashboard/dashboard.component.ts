import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  isSidebarOpen: boolean = true;
  constructor(private route: Router) {}

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  navigateToDepartment() {
    this.route.navigate(['/dashboard/department']);
  }

  logout() {
    localStorage.removeItem('accessToken');
    this.route.navigate(['signin']);
  }
}
