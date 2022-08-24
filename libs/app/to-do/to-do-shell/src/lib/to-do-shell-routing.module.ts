import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoShellComponent } from './to-do-shell/to-do-shell.component';
import { TodoTableGuard } from './guards/to-do-table.guard';
import { TodoPreviewGuard } from './guards/to-do-preview.guard';
import { appConfig } from '@app/shared/resources';

const routes: Routes = [
  {
    component: ToDoShellComponent,
    path: '',
    children: [
      {
        path: appConfig.routingTypes.todoList,
        canActivate: [TodoTableGuard],
        loadChildren: () =>
          import('@app/app/to-do/to-do-table/feature').then(
            (m) => m.TodoTableFeatureModule
          ),
      },
      {
        path: appConfig.routingTypes.todoPreview,
        canActivate: [TodoPreviewGuard],
        loadChildren: () =>
          import('@app/app/to-do/to-do-preview/feature').then(
            (m) => m.TodoPreviewFeatureModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [TodoPreviewGuard, TodoTableGuard],
})
export class ToDoShellRoutingModule {}
