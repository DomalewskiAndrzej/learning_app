import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarService } from './services/snackbar.service';
import { TimeParser } from './services/time-parser.service';
import { TransformTimePipe } from './pipes/transform-time.pipe';
import { NotificationStagePipe } from './pipes/notification-stage.pipe';

@NgModule({
  declarations: [TransformTimePipe, NotificationStagePipe],
  exports: [TransformTimePipe, NotificationStagePipe],
  imports: [CommonModule, MatSnackBarModule],
  providers: [SnackbarService, TimeParser],
})
export class SharedDomainModule {}
