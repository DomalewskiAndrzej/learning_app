import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appConfig } from '@app/shared/resources';
import { LayoutFeatureComponent } from './layout-feature/layout-feature.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutFeatureComponent,
    children: [
      {
        path: appConfig.routingTypes.startingPage,
        loadChildren: () =>
          import('@app/app/learning-stuff/learned-stuff-shell').then(
            (m) => m.LearnedStuffShellModule
          ),
      },
      {
        path: appConfig.routingTypes.todo,
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
