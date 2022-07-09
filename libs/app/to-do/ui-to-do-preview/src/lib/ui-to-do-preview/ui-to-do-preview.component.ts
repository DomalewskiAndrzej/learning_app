import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Todo } from '@app/app/to-do/domain';
import { appConfig } from '@app/shared/resources';

@Component({
  selector: 'app-ui-to-do-preview',
  templateUrl: './ui-to-do-preview.component.html',
  styleUrls: ['./ui-to-do-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiToDoPreviewComponent {
  @Output() editTodo = new EventEmitter<Todo>();
  @Output() startTodo = new EventEmitter<Todo>();
  @Input() todos: Todo[];
  priorities = appConfig.priorities;

  onEditTodo(todo: Todo): void {
    this.editTodo.emit(todo);
  }

  onStartTodo(todo: Todo): void {
    this.startTodo.emit(todo);
  }
}
