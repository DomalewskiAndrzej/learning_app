import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiItemsTableButtonsComponent } from './ui-items-table-buttons/ui-items-table-buttons.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTooltipModule],
  declarations: [UiItemsTableButtonsComponent],
  exports: [UiItemsTableButtonsComponent],
})
export class ToDoUiItemsTableButtonsModule {}
