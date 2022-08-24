import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnedStuffShellComponent } from './learned-stuff-shell/learned-stuff-shell.component';

const routes: Routes = [
  {
    path: '',
    component: LearnedStuffShellComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@app/app/learning-stuff/learned-stuff/feature').then(
            (m) => m.LearnedStuffFeatureModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearnedStuffShellRoutingModule {}
