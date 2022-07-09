import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiToDoPreviewComponent } from './ui-to-do-preview/ui-to-do-preview.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, MatTooltipModule, MatButtonModule, MatCardModule],
  declarations: [UiToDoPreviewComponent],
  exports: [UiToDoPreviewComponent],
})
export class ToDoUiToDoPreviewModule {}
