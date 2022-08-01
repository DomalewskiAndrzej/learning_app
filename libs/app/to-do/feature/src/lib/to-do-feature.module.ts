import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureToDoTableComponent } from './feature/feature-to-do-table/feature-to-do-table.component';
import { ToDoFeatureRoutingModule } from './to-do-feature-routing.module';
import { ToDoUiModule } from '@app/app-to-do-ui';
import { FeatureToDoPreviewComponent } from './feature/feature-to-do-preview/feature-to-do-preview.component';
import { SharedUiModule } from '@app/app-shared-ui';
import { ToDoPreviewGuard } from './guards/to-do-preview.guard';
import { SharedDomainModule } from '@app/shared/domain';
import { TodoDialogService } from './services/todo-dialog.service';

@NgModule({
  declarations: [FeatureToDoTableComponent, FeatureToDoPreviewComponent],
  imports: [
    CommonModule,
    ToDoFeatureRoutingModule,
    ToDoUiModule,
    SharedUiModule,
    SharedDomainModule,
  ],
  providers: [ToDoPreviewGuard, TodoDialogService],
})
export class ToDoFeatureModule {}
