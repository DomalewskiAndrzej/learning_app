import { createAction, props } from '@ngrx/store';
import { Todo } from '@app/app/to-do/domain';
import { LoadItems } from '@app/shared/domain';

export const loadTodos = createAction(
  '[Todo] Load Todos',
  props<{ payload: LoadItems }>()
);

export const loadTodosSuccess = createAction(
  '[Todo] Load Todos Success',
  props<{ payload: Todo[] }>()
);

export const loadTodosFailure = createAction(
  '[Todo] Load Todos Failure',
  props<{ error: any }>()
);

export const startTodo = createAction('[Todo] Start Todo', props<Todo>());

export const startTodoSuccess = createAction('[Todo] Start Todo Success');

export const startTodoFailure = createAction(
  '[Todo] Start Todo Failure',
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

export const deleteTodos = createAction(
  '[Todo] Delete Todos',
  props<{ payload: string[] }>()
);

export const deleteTodosSuccess = createAction(
  '[Todo] Delete Todos Success',
  props<{ payload: string[] }>()
);

export const deleteTodosFailure = createAction(
  '[Todo] Delete Todos Failure',
  props<{ error: any }>()
);

export const editTodo = createAction(
  '[Todo] Edit Todo',
  props<{ payload: Todo }>()
);

export const editTodoSuccess = createAction(
  '[Todo] Edit Todo Success',
  props<{ payload: Todo }>()
);

export const editTodoFailure = createAction(
  '[Todo] Edit Todo Failure',
  props<{ error: any }>()
);

export const selectTodos = createAction(
  '[Todo] Select Todos',
  props<{ payload: Todo[] }>()
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
  deleteTodos,
  deleteTodosSuccess,
  deleteTodosFailure,
  editTodo,
  editTodoSuccess,
  editTodoFailure,
  selectTodos,
  startTodo,
  startTodoSuccess,
  startTodoFailure,
};
