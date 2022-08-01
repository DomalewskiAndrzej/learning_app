import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutFeatureComponent } from './layout-feature/layout-feature.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutFeatureComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@app/app/starting-page/feature').then(
            (m) => m.StartingPageFeatureModule
          ),
      },
      {
        path: 'to-do',
        loadChildren: () =>
          import('@app/app/to-do/to-do-shell').then((m) => m.ToDoShellModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedFeatureRoutingModule {}
