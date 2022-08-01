import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureToDoTableComponent } from './feature-to-do-table/feature-to-do-table.component';
import { TodoTableFeatureRoutingModule } from './to-do-table-feature-routing.module';
import { TodoTableUiModule } from '@app/app/to-do/to-do-table/ui-to-do-table';
import { TodoSharedServicesModule } from '@app/app/to-do/shared/services';
import { TodoSharedUiModule } from '@app/app/to-do/shared/ui';

@NgModule({
  declarations: [FeatureToDoTableComponent],
  imports: [
    CommonModule,
    TodoTableFeatureRoutingModule,
    TodoTableUiModule,
    TodoSharedServicesModule,
    TodoSharedUiModule,
  ],
})
export class TodoTableFeatureModule {}
