import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiConfirmationDialogComponent } from './ui-confirmation-dialog/ui-confirmation-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  declarations: [UiConfirmationDialogComponent],
  exports: [UiConfirmationDialogComponent]
})
export class SharedUiConfirmationDialogModule {}
