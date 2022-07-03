import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-ui-items-table-buttons',
  templateUrl: './ui-items-table-buttons.component.html',
  styleUrls: ['./ui-items-table-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiItemsTableButtonsComponent {
  @Output() openTodo = new EventEmitter<boolean>();
  @Output() deleteTodo = new EventEmitter<void>();

  onOpenTodo(editMode = false): void {
    this.openTodo.emit(editMode);
  }

  onDeleteTodo(): void {
    this.deleteTodo.emit();
  }
}
