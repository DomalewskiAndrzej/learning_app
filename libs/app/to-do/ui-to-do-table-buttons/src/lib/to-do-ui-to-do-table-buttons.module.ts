import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiToDoTableButtonsComponent } from './ui-to-do-table-buttons/ui-to-do-table-buttons.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTooltipModule],
  declarations: [UiToDoTableButtonsComponent],
  exports: [UiToDoTableButtonsComponent],
})
export class ToDoUiToDoTableButtonsModule {}
