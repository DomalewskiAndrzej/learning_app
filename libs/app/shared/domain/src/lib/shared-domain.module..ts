import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarService } from './utils/services/snackbar.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [CommonModule, MatSnackBarModule],
  providers: [SnackbarService],
})
export class SharedDomainModule {}
