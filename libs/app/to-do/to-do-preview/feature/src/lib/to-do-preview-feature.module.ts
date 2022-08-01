import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureToDoPreviewComponent } from './feature-to-do-preview/feature-to-do-preview.component';
import { TodoPreviewFeatureRoutingModule } from './to-do-preview-feature-routing.module';
import { TodoPreviewUiModule } from '@app/app/to-do/to-do-preview/ui-to-do-preview';
import { TodoSharedServicesModule } from '@app/app/to-do/shared/services';
import { TodoSharedUiModule } from '@app/app/to-do/shared/ui';

@NgModule({
  declarations: [FeatureToDoPreviewComponent],
  imports: [
    CommonModule,
    TodoPreviewFeatureRoutingModule,
    TodoPreviewUiModule,
    TodoSharedServicesModule,
    TodoSharedUiModule,
  ],
})
export class TodoPreviewFeatureModule {}
