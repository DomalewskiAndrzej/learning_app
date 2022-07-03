import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, pluck, switchMap } from 'rxjs';
import { TodoService } from '../services/to-do/to-do.service';
import { Todo } from '@app/app/to-do/domain';
import { actionsFromTodo } from './to-do.actions';

@Injectable()
export class TodoEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionsFromTodo.loadTodos),
      pluck('payload'),
      switchMap((payload: any) =>
        this.todoService.loadTodos().pipe(
          map((payload: Todo[]) =>
            actionsFromTodo.loadTodosSuccess({ payload })
          ),
          catchError((error) => of(actionsFromTodo.loadTodosFailure({ error })))
        )
      )
    )
  );

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionsFromTodo.addTodo),
      pluck('payload'),
      switchMap((payload: Todo) =>
        this.todoService.addTodo(payload).pipe(
          map((payload: Todo) => actionsFromTodo.addTodoSuccess({ payload })),
          catchError((error) => of(actionsFromTodo.addTodoFailure({ error })))
        )
      )
    )
  );

  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionsFromTodo.deleteTodo),
      pluck('payload'),
      switchMap((payload: string) =>
        this.todoService.deleteTodo(payload).pipe(
          map(() => actionsFromTodo.deleteTodoSuccess({ payload })),
          catchError((error) =>
            of(actionsFromTodo.deleteTodoFailure({ error }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private todoService: TodoService) {}
}
