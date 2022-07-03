import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartingPageComponent } from "./feature-starting-page/starting-page/starting-page.component";
import { StartingPageUiStartingPageModule } from "@app/app/starting-page/ui-starting-page";
import {StartingPageFeatureRoutingModule} from "./starting-page-feature-routing.module";

@NgModule({
  declarations: [StartingPageComponent],
  imports: [CommonModule,StartingPageUiStartingPageModule,StartingPageFeatureRoutingModule],
})
export class StartingPageFeatureModule {}
