import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnedStuffFeatureComponent } from './learned-stuff-feature/learned-stuff-feature.component';

const routes: Routes = [
  {
    path: '',
    component: LearnedStuffFeatureComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearnedStuffFeatureRoutingModule {}
