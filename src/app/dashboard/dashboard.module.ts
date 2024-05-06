import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { DeptComponent } from './dept/dept.component';

@NgModule({
  declarations: [DashboardComponent, DeptComponent],
  imports: [CommonModule, DashboardRoutingModule, FormsModule],
})
export class DashboardModule {}
