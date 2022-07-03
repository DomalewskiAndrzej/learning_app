import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoComponent } from './feature-to-do/to-do/to-do.component';
import { ToDoUiTodoAddDialogModule } from '@app/app/to-do/ui-todo-add-dialog';
import { ToDoUiItemsTableModule } from '@app/app/to-do/ui-items-table';
import { ToDoFeatureRoutingModule } from './to-do-feature-routing.module';
import { AppToDoUiActionButtonsModule } from '@app/app/to-do/ui-action-buttons';
import { ToDoDataAccessModule } from '@app/app/to-do/data-access';

@NgModule({
  declarations: [ToDoComponent],
  imports: [
    CommonModule,
    ToDoUiTodoAddDialogModule,
    ToDoUiItemsTableModule,
    ToDoFeatureRoutingModule,
    AppToDoUiActionButtonsModule,
    ToDoDataAccessModule,
  ],
})
export class ToDoFeatureModule {}
