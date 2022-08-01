import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Todo } from '@app/app/to-do/domain';

@Component({
  selector: 'app-ui-notification',
  templateUrl: './ui-notification.component.html',
  styleUrls: ['./ui-notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiNotificationComponent {
  @Input() notifications: any[];
  @Input() todosInProgress: Todo[];
  @Output() loadTodosInProgress = new EventEmitter<void>();
  @Output() loadNotifications = new EventEmitter<void>();

  onLoadMoreItems(): void {
    this.notifications
      ? this.loadNotifications.emit()
      : this.loadTodosInProgress.emit();
  }
}
