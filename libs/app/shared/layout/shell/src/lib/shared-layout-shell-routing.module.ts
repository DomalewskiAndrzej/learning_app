import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutShellComponent } from './layout-shell/layout-shell.component';
import { LayoutGuard } from './guards/layout.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutShellComponent,
    canActivate: [AuthGuard, LayoutGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@app/app-shared-layout-feature').then(
            (m) => m.SharedFeatureModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [LayoutGuard, AuthGuard],
})
export class SharedLayoutShellRoutingModule {}
