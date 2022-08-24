import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { LoadItems, Notification } from '@app/shared/domain';
import { appConfig } from '@app/shared/resources';
import { Observable } from 'rxjs';
import { Todo } from '@app/app/to-do/domain';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-ui-toolbar',
  templateUrl: './ui-toolbar.component.html',
  styleUrls: ['./ui-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiToolbarComponent {
  @Output() navigateBack = new EventEmitter<void>();
  @Output() loadTodosInProgressNotifications = new EventEmitter<LoadItems>();
  @Output() loadNotifications = new EventEmitter<LoadItems>();
  @Output() openNotification = new EventEmitter<Todo>();
  @Input() sidenav: boolean;
  @Input() notifications: Notification[];
  @Input() notificationsQuantity: number;
  @Input() todosInProgressNotifications: Todo[];
  @Input() todosInProgressNotificationsQuantity: number;
  @Input() requestInProgress: boolean;
  @Input() notificationsRequestInProgress: Observable<boolean>;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  onNavigateBack(): void {
    this.navigateBack.emit();
  }

  onOpenNotification(todoInProgress: Todo): void {
    this.trigger.closeMenu();
    this.openNotification.emit(todoInProgress);
  }

  onLoadTodosInProgressNotifications(): void {
    if (
      this.todosInProgressNotificationsQuantity -
        this.todosInProgressNotifications.length >
      0
    ) {
      this.loadTodosInProgressNotifications.emit({
        offset: appConfig.itemsPerLoad,
      });
    }
  }

  onLoadNotifications(): void {
    if (this.notificationsQuantity - this.notifications.length > 0) {
      this.loadNotifications.emit({
        offset: appConfig.itemsPerLoad,
      });
    }
  }
}
