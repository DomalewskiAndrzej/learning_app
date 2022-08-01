import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, pluck, switchMap } from 'rxjs';
import { ToDoService } from '../services/to-do/to-do.service';
import { Todo } from '@app/app/to-do/domain';
import { actionsFromTodo } from './to-do.actions';
import { LoadItems, SnackbarService } from '@app/shared/domain';

@Injectable()
export class TodoEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionsFromTodo.loadTodos),
      pluck('payload'),
      switchMap((payload: LoadItems) =>
        this.todoService.loadTodos(payload.offset).pipe(
          map((payload: Todo[]) =>
            actionsFromTodo.loadTodosSuccess({ payload })
          ),
          catchError((error) => of(actionsFromTodo.loadTodosFailure({ error })))
        )
      )
    )
  );

  startTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionsFromTodo.startTodo),
      switchMap((payload: Todo) =>
        this.todoService.startTodo(payload).pipe(
          map(() => {
            this.snackbarService.openSnackBar(
              `Successfully started todo: ${payload.name}`,
              'OK!'
            );
            return actionsFromTodo.startTodoSuccess();
          }),
          catchError((error) => of(actionsFromTodo.startTodoFailure({ error })))
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
          map((payload: Todo) => {
            this.snackbarService.openSnackBar(
              `Successfully added todo: ${payload.name}`,
              'OK!'
            );
            return actionsFromTodo.addTodoSuccess({ payload });
          }),
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
          map(() => {
            this.snackbarService.openSnackBar(
              'Successfully deleted todo',
              'OK!'
            );
            return actionsFromTodo.deleteTodoSuccess({ payload });
          }),
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
          map(() => {
            this.snackbarService.openSnackBar(
              'Successfully deleted todos',
              'OK!'
            );
            return actionsFromTodo.deleteTodosSuccess({ payload });
          }),
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
          map((todo: Todo) => {
            this.snackbarService.openSnackBar(
              `Successfully updated todo: ${todo.name}`,
              'OK!'
            );
            return actionsFromTodo.editTodoSuccess({ payload: todo });
          }),
          catchError((error) => of(actionsFromTodo.editTodoFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private todoService: ToDoService,
    private snackbarService: SnackbarService
  ) {}
}
