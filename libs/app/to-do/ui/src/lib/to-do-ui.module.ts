import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiActionButtonsComponent } from './ui-action-buttons/ui-action-buttons.component';
import { MatButtonModule } from '@angular/material/button';
import { UiToDoAddEditDialogComponent } from './ui-to-do-add-edit-dialog/ui-to-do-add-edit-dialog.component';
import { UiTodoPreviewComponent } from './ui-to-do-preview/ui-to-do-preview.component';
import { UiToDoTableComponent } from './ui-to-do-table/ui-to-do-table.component';
import { UiToDoTableButtonsComponent } from './ui-to-do-table-buttons/ui-to-do-table-buttons.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { SharedDomainModule } from '@app/shared/domain';

@NgModule({
  declarations: [
    UiActionButtonsComponent,
    UiToDoAddEditDialogComponent,
    UiTodoPreviewComponent,
    UiToDoTableComponent,
    UiToDoTableButtonsComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTableModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    SharedDomainModule,
  ],
  exports: [
    UiActionButtonsComponent,
    UiToDoAddEditDialogComponent,
    UiTodoPreviewComponent,
    UiToDoTableComponent,
    UiToDoTableButtonsComponent,
  ],
})
export class ToDoUiModule {}
