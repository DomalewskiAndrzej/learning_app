import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectAll, todoFeatureKey, TodoState } from './to-do.reducer';

const getTodoState = createFeatureSelector<TodoState>(todoFeatureKey);

const getTodos = createSelector(getTodoState, selectAll);

export const toDoQuery = {
  getTodos,
};
