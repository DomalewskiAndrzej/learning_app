import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarService } from './services/snackbar.service';
import { TimeParser } from './services/time-parser.service';
import { TransformTimePipe } from './pipes/transform-time.pipe';

@NgModule({
  declarations: [TransformTimePipe],
  exports: [TransformTimePipe],
  imports: [CommonModule, MatSnackBarModule],
  providers: [SnackbarService, TimeParser],
})
export class SharedDomainModule {}
