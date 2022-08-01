import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Todo } from '@app/app/to-do/domain';
import { LoadItems } from '@app/shared/domain';
import { appConfig } from '@app/shared/resources';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ui-toolbar',
  templateUrl: './ui-toolbar.component.html',
  styleUrls: ['./ui-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiToolbarComponent {
  @Output() navigateBack = new EventEmitter<void>();
  @Output() loadTodosInProgress = new EventEmitter<LoadItems>();
  @Output() loadNotifications = new EventEmitter<LoadItems>();
  @Input() sidenav: boolean;
  @Input() notifications: Observable<Notification[]>;
  @Input() todosInProgress: Observable<Todo[]>;
  @Input() notificationsQuantity: number;
  @Input() todosInProgressQuantity: number;

  onNavigateBack(): void {
    this.navigateBack.emit();
  }

  onLoadTodosInProgress(): void {
    this.loadTodosInProgress.emit({ offset: appConfig.itemsPerLoad });
  }

  onLoadNotifications(): void {
    this.loadNotifications.emit({ offset: appConfig.itemsPerLoad });
  }
}
