import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-ui-load-items-button',
  templateUrl: './ui-load-items-button.component.html',
  styleUrls: ['./ui-load-items-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiLoadItemsButtonComponent {
  @Output() loadItems = new EventEmitter<void>();
  @Input() requestInProgress: boolean;
  @Input() diameter = 100;
  @Input() canLoadMoreItems: boolean;

  onLoadItems($event: Event): void {
    $event.stopPropagation();
    this.loadItems.emit();
  }
}
