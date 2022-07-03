import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Todo } from '@app/app/to-do/domain';
import { actionsFromTodo } from './to-do.actions';

export const todoFeatureKey = 'todo';

export interface TodoState extends EntityState<Todo> {
  selectedTodos: Todo[];
}

export interface TodoPartialState {
  readonly [todoFeatureKey]: TodoState;
}

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>({});

export const initialState: TodoState = adapter.getInitialState({
  selectedTodos: [],
});

export const TodoReducer = createReducer(
  initialState,
  on(actionsFromTodo.loadTodosSuccess, (state, action) => {
    return adapter.upsertMany(action.payload, state);
  }),

  on(actionsFromTodo.addTodoSuccess, (state, action) => {
    return adapter.addOne(action.payload, state);
  }),

  on(actionsFromTodo.deleteTodoSuccess, (state, action) => {
    return adapter.removeOne(action.payload, state);
  }),

  on(actionsFromTodo.deleteTodosSuccess, (state, action) => {
    return adapter.removeMany(action.payload, state);
  }),

  on(actionsFromTodo.editTodoSuccess, (state, action) => {
    return adapter.upsertOne(action.payload, state);
  }),

  on(actionsFromTodo.selectTodos, (state, action) => {
    return { ...state, selectedTodos: action.payload };
  })
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
