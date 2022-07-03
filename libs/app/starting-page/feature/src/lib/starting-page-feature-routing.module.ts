import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StartingPageComponent} from "./feature-starting-page/starting-page/starting-page.component";

const routes: Routes = [
  {
    path: '',
    component: StartingPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartingPageFeatureRoutingModule {}
