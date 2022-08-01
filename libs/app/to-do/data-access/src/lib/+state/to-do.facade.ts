import { Injectable } from '@angular/core';
import { Todo } from '@app/app/to-do/domain';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { toDoQuery } from './to-do.selectors';
import { TodoPartialState } from './to-do.reducer';
import { actionsFromTodo } from './to-do.actions';
import { LoadItems } from '@app/shared/domain';

@Injectable()
export class TodoFacade {
  getTodos$: Observable<Todo[]> = this.store.pipe(select(toDoQuery.getTodos));
  getTodosExists$: Observable<boolean> = this.store.pipe(
    select(toDoQuery.getTodosExists)
  );
  getSelectedTodos$: Observable<Todo[]> = this.store.pipe(
    select(toDoQuery.getSelectedTodos)
  );
  getSelectedTodosUUID$: Observable<string[]> = this.store.pipe(
    select(toDoQuery.getSelectedTodosUUID)
  );

  constructor(private store: Store<TodoPartialState>) {}

  startTodo(todo: Todo): void {
    this.store.dispatch(actionsFromTodo.startTodo(todo));
  }

  loadTodos(payload: LoadItems): void {
    this.store.dispatch(actionsFromTodo.loadTodos({ payload }));
  }

  addTodo(payload: Todo): void {
    this.store.dispatch(actionsFromTodo.addTodo({ payload }));
  }

  editTodo(payload: Todo): void {
    this.store.dispatch(actionsFromTodo.editTodo({ payload }));
  }

  deleteTodo(payload: string): void {
    this.store.dispatch(actionsFromTodo.deleteTodo({ payload }));
  }

  deleteTodos(payload: string[]): void {
    this.store.dispatch(actionsFromTodo.deleteTodos({ payload }));
  }

  selectTodos(payload: Todo[]): void {
    this.store.dispatch(actionsFromTodo.selectTodos({ payload }));
  }
}
