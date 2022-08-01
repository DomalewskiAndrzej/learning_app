import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoShellComponent } from './to-do-shell/to-do-shell.component';

const routes: Routes = [
  {
    component: ToDoShellComponent,
    path: '',
    loadChildren: () =>
      import('@app/app/to-do/feature').then((m) => m.ToDoFeatureModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToDoShellRoutingModule {}
