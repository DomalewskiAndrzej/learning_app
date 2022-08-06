import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ItemInformation, LoadItems } from '@app/shared/domain';
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
  @Output() loadTodosInProgressNotifications = new EventEmitter<LoadItems>();
  @Output() loadNotifications = new EventEmitter<LoadItems>();
  @Input() sidenav: boolean;
  @Input() notifications: ItemInformation[];
  @Input() notificationsQuantity: number;
  @Input() todosInProgressNotifications: ItemInformation[];
  @Input() todosInProgressNotificationsQuantity: number;
  @Input() requestInProgress: boolean;
  @Input() notificationsRequestInProgress: Observable<boolean>;

  onNavigateBack(): void {
    this.navigateBack.emit();
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
