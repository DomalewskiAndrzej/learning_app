import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectAll, todoFeatureKey, TodoState } from './to-do.reducer';

const getTodoState = createFeatureSelector<TodoState>(todoFeatureKey);

const getTodos = createSelector(getTodoState, selectAll);

const getSelectedTodos = createSelector(
  getTodoState,
  (state) => state.selectedTodos
);

const getSelectedTodosUUID = createSelector(getTodoState, (state) => {
  return state.selectedTodos.map((todo) => todo.uuid);
});

const getTodosExists = createSelector(
  getTodoState,
  (state) => state.todosExists
);

const requestInProgress = createSelector(
  getTodoState,
  (state) => state.requestInProgress
);

const canLoadMoreItems = createSelector(
  getTodoState,
  (state) => state.ids.length < state.todosQuantity
);

export const toDoQuery = {
  getTodos,
  getSelectedTodos,
  getSelectedTodosUUID,
  getTodosExists,
  requestInProgress,
  canLoadMoreItems,
};
