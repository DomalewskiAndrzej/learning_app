import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ui-notification',
  templateUrl: './ui-notification.component.html',
  styleUrls: ['./ui-notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiNotificationComponent {
  constructor() {}
}
