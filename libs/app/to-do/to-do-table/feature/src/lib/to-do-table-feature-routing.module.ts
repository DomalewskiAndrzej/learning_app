import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureToDoTableComponent } from './feature-to-do-table/feature-to-do-table.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureToDoTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoTableFeatureRoutingModule {}
