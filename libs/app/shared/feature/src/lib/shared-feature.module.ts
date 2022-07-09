import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFeatureRoutingModule } from './shared-feature-routing.module';
import { SharedUiSidenavModule } from '@app/app/shared/ui-sidenav';
import { SharedUiToolbarModule } from '@app/app/shared/ui-toolbar';
import { LayoutFeatureComponent } from './layout-feature/layout-feature.component';
import { SharedDataAccessModule } from '@app/shared/data-access';

@NgModule({
  imports: [
    CommonModule,
    SharedFeatureRoutingModule,
    SharedUiSidenavModule,
    SharedUiToolbarModule,
    SharedDataAccessModule,
  ],
  declarations: [LayoutFeatureComponent],
})
export class SharedFeatureModule {}
