import { createAction, props } from '@ngrx/store';
import { Todo } from '@app/app/to-do/domain';

export const loadTodos = createAction(
  '[Todo] Load Todos',
  props<{ payload: any }>()
);

export const loadTodosSuccess = createAction(
  '[Todo] Load Todos Success',
  props<{ payload: Todo[] }>()
);

export const loadTodosFailure = createAction(
  '[Todo] Load Todos Failure',
  props<{ error: any }>()
);

export const addTodo = createAction(
  '[Todo] Add Todo',
  props<{ payload: Todo }>()
);

export const addTodoSuccess = createAction(
  '[Todo] Add Todo Success',
  props<{ payload: Todo }>()
);

export const addTodoFailure = createAction(
  '[Todo] Add Todo Failure',
  props<{ error: any }>()
);

export const deleteTodo = createAction(
  '[Todo] Delete Todo',
  props<{ payload: string }>()
);

export const deleteTodoSuccess = createAction(
  '[Todo] Delete Todo Success',
  props<{ payload: string }>()
);

export const deleteTodoFailure = createAction(
  '[Todo] Delete Todo Failure',
  props<{ error: any }>()
);

export const actionsFromTodo = {
  loadTodos,
  loadTodosSuccess,
  loadTodosFailure,
  addTodo,
  addTodoSuccess,
  addTodoFailure,
  deleteTodo,
  deleteTodoSuccess,
  deleteTodoFailure,
};
