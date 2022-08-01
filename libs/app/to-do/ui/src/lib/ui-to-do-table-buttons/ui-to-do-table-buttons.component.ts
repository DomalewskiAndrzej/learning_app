import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-ui-to-do-table-buttons',
  templateUrl: './ui-to-do-table-buttons.component.html',
  styleUrls: ['./ui-to-do-table-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiToDoTableButtonsComponent {
  @Output() openTodo = new EventEmitter<void>();
  @Output() deleteTodo = new EventEmitter<void>();
  @Output() editTodo = new EventEmitter<void>();
  @Input() disabled = false;
  @Input() multiSelect = false;

  onOpenTodo(): void {
    this.openTodo.emit();
  }

  onEditTodo(): void {
    this.editTodo.emit();
  }

  onDeleteTodo(): void {
    this.deleteTodo.emit();
  }
}
