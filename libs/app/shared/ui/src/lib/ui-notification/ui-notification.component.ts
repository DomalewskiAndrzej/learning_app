import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ItemInformation } from '@app/shared/domain';

@Component({
  selector: 'app-ui-notification',
  templateUrl: './ui-notification.component.html',
  styleUrls: ['./ui-notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiNotificationComponent {
  @Input() notifications: ItemInformation[];
  @Output() loadItems = new EventEmitter<void>();
  @Input() spinner: boolean;
  @Input() quantity: number;

  onLoadItems(): void {
    this.loadItems.emit();
  }
}
