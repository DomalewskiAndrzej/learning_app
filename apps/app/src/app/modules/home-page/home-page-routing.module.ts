import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
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
          import('@app/app/to-do/feature').then((m) => m.ToDoFeatureModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
