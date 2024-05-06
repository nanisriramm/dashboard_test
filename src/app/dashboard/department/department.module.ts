import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './department.component';
import { RouterModule } from '@angular/router';
import { DepartmentRoutingModule } from './department-routing.module';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { NewComponent } from './new/new.component';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    DepartmentComponent,
    EditComponent,
    DeleteComponent,
    NewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DepartmentRoutingModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
  ],
})
export class DepartmentModule {}
