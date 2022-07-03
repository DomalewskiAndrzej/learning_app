import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiActionButtonsComponent } from './ui-action-buttons/ui-action-buttons.component';
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [UiActionButtonsComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [UiActionButtonsComponent]
})
export class AppToDoUiActionButtonsModule {}
