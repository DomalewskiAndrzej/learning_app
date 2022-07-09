import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureToDoTableComponent } from './feature-to-do/feature-to-do-table/feature-to-do-table.component';
import { ToDoUiToDoAddEditDialogModule } from '@app/app/to-do/ui-to-do-add-dialog';
import { ToDoUiToDoTableModule } from '@app/app/to-do/ui-to-do-table';
import { ToDoFeatureRoutingModule } from './to-do-feature-routing.module';
import { AppToDoUiActionButtonsModule } from '@app/app/to-do/ui-action-buttons';
import { ToDoDataAccessModule } from '@app/app/to-do/data-access';
import { FeatureToDoPreviewComponent } from './feature-to-do/feature-to-do-preview/feature-to-do-preview.component';
import { ToDoUiToDoPreviewModule } from '@app/app/to-do/ui-to-do-preview';
import { SharedUiConfirmationDialogModule } from '@app/app/shared/ui-confirmation-dialog';
import { ToDoPreviewGuard } from './guards/to-do-preview.guard';
import { SharedDomainModule } from '../../../../shared/domain/src/lib/shared-domain.module.';

@NgModule({
  declarations: [FeatureToDoTableComponent, FeatureToDoPreviewComponent],
  imports: [
    CommonModule,
    ToDoUiToDoAddEditDialogModule,
    ToDoUiToDoTableModule,
    ToDoFeatureRoutingModule,
    AppToDoUiActionButtonsModule,
    ToDoDataAccessModule,
    ToDoUiToDoPreviewModule,
    SharedUiConfirmationDialogModule,
    SharedDomainModule,
  ],
  providers: [ToDoPreviewGuard],
})
export class ToDoFeatureModule {}
