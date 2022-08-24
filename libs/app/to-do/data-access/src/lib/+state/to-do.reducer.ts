import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Todo } from '@app/app/to-do/domain';
import { actionsFromTodo } from './to-do.actions';

export const todoFeatureKey = 'todo';

export interface TodoState extends EntityState<Todo> {
  selectedTodos: Todo[];
  todosExists: boolean;
  requestInProgress: boolean;
  todosQuantity: number;
}

export interface TodoPartialState {
  readonly [todoFeatureKey]: TodoState;
}

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>({
  selectId: (todo: Todo) => todo.uuid,
});

export const initialState: TodoState = adapter.getInitialState({
  selectedTodos: [],
  todosExists: false,
  requestInProgress: false,
  todosQuantity: 0,
});

export const TodoReducer = createReducer(
  initialState,
  on(actionsFromTodo.loadTodos, actionsFromTodo.loadTodosQuantity, (state) => {
    return { ...state, requestInProgress: true };
  }),

  on(actionsFromTodo.loadTodosSuccess, (state, action) => {
    return adapter.upsertMany(action.payload, {
      ...state,
      todosExists: true,
      requestInProgress: false,
    });
  }),

  on(actionsFromTodo.loadTodosQuantitySuccess, (state, action) => {
    return {
      ...state,
      requestInProgress: false,
      todosQuantity: action.payload,
    };
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

  on(
    actionsFromTodo.editTodoSuccess,
    actionsFromTodo.startTodoSuccess,
    actionsFromTodo.finishTodoSuccess,
    (state, action) => {
      const selectedTodos = state.selectedTodos
        ? state.selectedTodos.map((todo) =>
            todo.uuid === action.payload.uuid ? action.payload : todo
          )
        : [];
      return adapter.updateOne(
        { id: action.payload.uuid, changes: { ...action.payload } },
        { ...state, selectedTodos }
      );
    }
  ),

  on(actionsFromTodo.selectTodos, (state, action) => {
    return { ...state, selectedTodos: action.payload };
  })
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
