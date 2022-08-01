import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Todo } from '@app/app/to-do/domain';

@Component({
  selector: 'app-ui-toolbar',
  templateUrl: './ui-toolbar.component.html',
  styleUrls: ['./ui-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiToolbarComponent {
  @Output() navigateBack = new EventEmitter<void>();
  @Output() openTodosInProgress = new EventEmitter<void>();
  @Output() openNotifications = new EventEmitter<void>();
  @Input() sidenav: boolean;
  @Input() notifications: Notification[];
  @Input() todosInProgress: Todo[];
  @Input() notificationsQuantity: number;
  @Input() todosInProgressQuantity: number;

  onNavigateBack(): void {
    this.navigateBack.emit();
  }

  onOpenTodosInProgress(): void {
    this.openTodosInProgress.emit();
  }

  onOpenNotifications(): void {
    this.openNotifications.emit();
  }
}
