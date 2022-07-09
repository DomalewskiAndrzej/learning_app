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

export const toDoQuery = {
  getTodos,
  getSelectedTodos,
  getSelectedTodosUUID,
};
