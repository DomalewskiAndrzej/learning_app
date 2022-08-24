import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiConfirmationDialogComponent } from './ui-confirmation-dialog/ui-confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { UiLoadItemsButtonComponent } from './ui-load-items-button/ui-load-items-button.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [UiConfirmationDialogComponent, UiLoadItemsButtonComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  exports: [UiConfirmationDialogComponent, UiLoadItemsButtonComponent],
})
export class SharedUiModule {}
