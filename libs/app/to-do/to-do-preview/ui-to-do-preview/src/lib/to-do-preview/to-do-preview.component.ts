import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Todo } from '@app/app/to-do/domain';

@Component({
  selector: 'app-to-do-preview',
  templateUrl: './to-do-preview.component.html',
  styleUrls: ['./to-do-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoPreviewComponent {
  @Output() editTodo = new EventEmitter<Todo>();
  @Output() startTodo = new EventEmitter<Todo>();
  @Output() finishTodo = new EventEmitter<Todo>();
  @Input() todos: Todo[];

  onEditTodo(todo: Todo): void {
    this.editTodo.emit(todo);
  }

  onStartTodo(todo: Todo): void {
    this.startTodo.emit(todo);
  }

  onFinishTodo(todo: Todo): void {
    this.finishTodo.emit(todo);
  }
}
