import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Todo } from '@app/app/to-do/domain';

@Component({
  selector: 'app-ui-items-table',
  templateUrl: './ui-items-table.component.html',
  styleUrls: ['./ui-items-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiItemsTableComponent {
  @Output() openToDo = new EventEmitter<[Todo, boolean]>();
  @Output() deleteTodo = new EventEmitter<string>();
  @Input() lastOpenedToDo: Todo;
  @Input() todos: Todo[];

  displayedColumns: string[] = [
    'id',
    'name',
    'timeToComplete',
    'priority',
    'options',
  ];
  selectedTodo: Todo | null;

  onDeleteTodo(id: string): void {
    this.deleteTodo.emit(id);
  }

  onOpenToDo(todo: Todo, editMode = false): void {
    this.openToDo.emit([todo, editMode]);
    this.selectedTodo = null;
  }
}
