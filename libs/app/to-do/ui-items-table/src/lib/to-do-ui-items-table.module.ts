import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiItemsTableComponent } from './ui-items-table/ui-items-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ToDoUiItemsTableButtonsModule } from '@app/app/to-do/ui-items-table-buttons';

@NgModule({
  declarations: [UiItemsTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    ToDoUiItemsTableButtonsModule,
  ],
  exports: [UiItemsTableComponent],
})
export class ToDoUiItemsTableModule {}
