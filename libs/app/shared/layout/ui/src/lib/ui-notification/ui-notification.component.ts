import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-ui-notification',
  templateUrl: './ui-notification.component.html',
  styleUrls: ['./ui-notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiNotificationComponent {
  @Input() spinner: boolean;
  @Input() canLoadMoreItems: boolean;
  @Input() isNotification: boolean;
  @Output() loadItems = new EventEmitter<void>();
  @ContentChild('notificationUi') notificationUi: TemplateRef<unknown>;

  onLoadItems(): void {
    this.loadItems.emit();
  }
}
