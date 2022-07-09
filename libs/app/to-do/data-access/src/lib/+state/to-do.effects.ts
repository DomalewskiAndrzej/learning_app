import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, pluck, switchMap } from 'rxjs';
import { TodoService } from '../services/to-do/to-do.service';
import { Todo, TodoLoad } from '@app/app/to-do/domain';
import { actionsFromTodo } from './to-do.actions';

@Injectable()
export class TodoEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionsFromTodo.loadTodos),
      pluck('payload'),
      switchMap((payload: TodoLoad) =>
        this.todoService.loadTodos(payload.offset).pipe(
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
        this.todoService.deleteTodos([payload]).pipe(
          map(() => actionsFromTodo.deleteTodoSuccess({ payload })),
          catchError((error) =>
            of(actionsFromTodo.deleteTodoFailure({ error }))
          )
        )
      )
    )
  );

  deleteTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionsFromTodo.deleteTodos),
      pluck('payload'),
      switchMap((payload: string[]) =>
        this.todoService.deleteTodos(payload).pipe(
          map(() => actionsFromTodo.deleteTodosSuccess({ payload })),
          catchError((error) =>
            of(actionsFromTodo.deleteTodosFailure({ error }))
          )
        )
      )
    )
  );

  editTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionsFromTodo.editTodo),
      pluck('payload'),
      switchMap((payload: Todo) =>
        this.todoService.editTodo(payload).pipe(
          map((todo: Todo) =>
            actionsFromTodo.editTodoSuccess({ payload: todo })
          ),
          catchError((error) => of(actionsFromTodo.editTodoFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private todoService: TodoService) {}
}
