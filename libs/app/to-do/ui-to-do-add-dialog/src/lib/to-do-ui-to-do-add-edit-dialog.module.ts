import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { UiToDoAddEditDialogComponent } from './ui-to-do-add-edit-dialog/ui-to-do-add-edit-dialog.component';

@NgModule({
  declarations: [UiToDoAddEditDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
  ],
  exports: [UiToDoAddEditDialogComponent],
})
export class ToDoUiToDoAddEditDialogModule {}
