import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFeatureRoutingModule } from './shared-feature-routing.module';
import { LayoutFeatureComponent } from './layout-feature/layout-feature.component';
import { SharedDataAccessModule } from '@app/shared/data-access';
import { SharedUiModule } from '@app/app-shared-ui';

@NgModule({
  imports: [
    CommonModule,
    SharedFeatureRoutingModule,
    SharedDataAccessModule,
    SharedUiModule,
  ],
  declarations: [LayoutFeatureComponent],
})
export class SharedFeatureModule {}
