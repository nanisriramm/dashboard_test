import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {
    path: '',
    component: DepartmentComponent,

    children: [
      {
        path: 'edit',
        component: EditComponent,
      },
      {
        path: 'delete',
        component: DeleteComponent,
      },
      {
        path: 'new',
        component: NewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentRoutingModule {}
