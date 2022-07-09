import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-ui-toolbar',
  templateUrl: './ui-toolbar.component.html',
  styleUrls: ['./ui-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiToolbarComponent {
  @Output() navigateBack = new EventEmitter<void>();
  @Input() sidenav: boolean;
  @Input() notifications: Notification[];

  onNavigateBack(): void {
    this.navigateBack.emit();
  }
}
