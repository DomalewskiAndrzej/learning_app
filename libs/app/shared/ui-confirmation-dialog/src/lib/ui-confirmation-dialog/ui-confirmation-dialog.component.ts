import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ui-confirmation-dialog',
  templateUrl: './ui-confirmation-dialog.component.html',
  styleUrls: ['./ui-confirmation-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiConfirmationDialogComponent {}
