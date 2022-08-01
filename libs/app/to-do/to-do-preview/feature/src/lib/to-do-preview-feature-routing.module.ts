import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureToDoPreviewComponent } from './feature-to-do-preview/feature-to-do-preview.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureToDoPreviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoPreviewFeatureRoutingModule {}
