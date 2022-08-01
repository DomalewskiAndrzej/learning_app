import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureToDoTableComponent } from './feature/feature-to-do-table/feature-to-do-table.component';
import { FeatureToDoPreviewComponent } from './feature/feature-to-do-preview/feature-to-do-preview.component';
import { ToDoPreviewGuard } from './guards/to-do-preview.guard';

const routes: Routes = [
  {
    path: '',
    component: FeatureToDoTableComponent,
  },
  {
    path: 'preview',
    component: FeatureToDoPreviewComponent,
    canActivate: [ToDoPreviewGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToDoFeatureRoutingModule {}
