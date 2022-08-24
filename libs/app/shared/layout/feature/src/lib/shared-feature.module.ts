import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFeatureRoutingModule } from './shared-feature-routing.module';
import { LayoutFeatureComponent } from './layout-feature/layout-feature.component';
import { SharedDataAccessModule } from '@app/shared/data-access';
import { SharedLayoutUiModule } from '@app/app/shared/layout/ui';
import { TodoFacade } from '@app/app/to-do/data-access';

@NgModule({
  imports: [
    CommonModule,
    SharedFeatureRoutingModule,
    SharedDataAccessModule,
    SharedLayoutUiModule,
  ],
  declarations: [LayoutFeatureComponent],
  providers: [TodoFacade],
})
export class SharedFeatureModule {}
