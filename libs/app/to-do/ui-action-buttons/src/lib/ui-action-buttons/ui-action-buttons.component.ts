import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-ui-action-buttons',
  templateUrl: './ui-action-buttons.component.html',
  styleUrls: ['./ui-action-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiActionButtonsComponent {
  @Output() addTodo = new EventEmitter();

  onAddTodo(): void {
    this.addTodo.emit();
  }
}
