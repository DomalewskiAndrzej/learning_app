import { Injectable } from '@angular/core';
import { Todo } from '@app/app/to-do/domain';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { toDoQuery } from './to-do.selectors';
import { TodoPartialState } from './to-do.reducer';
import { actionsFromTodo } from './to-do.actions';

@Injectable()
export class TodoFacade {
  getTodos: Observable<Todo[]> = this.store.pipe(select(toDoQuery.getTodos));

  constructor(private store: Store<TodoPartialState>) {}

  loadToDdos(payload: any): void {
    this.store.dispatch(actionsFromTodo.loadTodos({ payload }));
  }

  addToDdo(payload: Todo): void {
    this.store.dispatch(actionsFromTodo.addTodo({ payload }));
  }

  deleteTodo(payload: string): void {
    this.store.dispatch(actionsFromTodo.deleteTodo({ payload }));
  }
}
