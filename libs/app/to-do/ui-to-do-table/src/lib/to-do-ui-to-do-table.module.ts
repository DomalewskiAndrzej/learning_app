import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiToDoTableComponent } from './ui-to-do-table/ui-to-do-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ToDoUiToDoTableButtonsModule } from '@app/app/to-do/ui-to-do-table-buttons';

@NgModule({
  declarations: [UiToDoTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    ToDoUiToDoTableButtonsModule,
  ],
  exports: [UiToDoTableComponent],
})
export class ToDoUiToDoTableModule {}
