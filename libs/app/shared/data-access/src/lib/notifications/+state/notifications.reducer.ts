import { createReducer, on } from '@ngrx/store';
import { actionsFromNotifications } from './notifications.actions';
import { Notification } from '@app/shared/domain';
import { actionsFromTodo } from '@app/app/to-do/data-access';
import { Todo } from '@app/app/to-do/domain';

export interface NotificationsState {
  todosInProgressNotificationsQuantity: number;
  todosInProgressNotifications: Todo[];
  notificationsQuantity: number;
  notifications: Notification[];
  notificationsRequestInProgress: boolean;
}

export const NotificationsInitialState: NotificationsState = {
  notificationsQuantity: 0,
  todosInProgressNotificationsQuantity: 0,
  notifications: [],
  todosInProgressNotifications: [],
  notificationsRequestInProgress: true,
};

export const notificationsReducer = createReducer(
  NotificationsInitialState,
  on(
    actionsFromNotifications.loadNotifications,
    actionsFromNotifications.loadTodosInProgressNotifications,
    actionsFromNotifications.loadNotificationsQuantity,
    actionsFromNotifications.loadTodosInProgressNotificationsQuantity,
    (state) => {
      return { ...state, notificationsRequestInProgress: true };
    }
  ),

  on(actionsFromTodo.startTodoSuccess, (state, action) => {
    return {
      ...state,
      todosInProgressNotificationsQuantity:
        state.todosInProgressNotificationsQuantity + 1,
      todosInProgressNotifications: [
        ...state.todosInProgressNotifications,
        action.payload,
      ],
    };
  }),

  on(actionsFromTodo.finishTodoSuccess, (state, action) => {
    const todosInProgressNotifications = [
      ...state.todosInProgressNotifications,
    ];
    return {
      ...state,
      todosInProgressNotificationsQuantity:
        state.todosInProgressNotificationsQuantity - 1,
      todosInProgressNotifications: todosInProgressNotifications?.filter(
        (todo) => todo.uuid !== action.payload.uuid
      ),
    };
  }),

  on(
    actionsFromNotifications.loadTodosInProgressNotificationsQuantitySuccess,
    (state, action) => {
      return {
        ...state,
        todosInProgressNotificationsQuantity: action.quantity
          ? action.quantity
          : 0,
        notificationsRequestInProgress: false,
      };
    }
  ),

  on(
    actionsFromNotifications.loadTodosInProgressNotificationsSuccess,
    (state, action) => {
      return {
        ...state,
        todosInProgressNotifications: [
          ...state.todosInProgressNotifications,
          ...action.todosInProgressNotifications,
        ],
        notificationsRequestInProgress: false,
      };
    }
  ),

  on(
    actionsFromNotifications.loadNotificationsQuantitySuccess,
    (state, action) => {
      return {
        ...state,
        notificationsQuantity: action.quantity ? action.quantity : 0,
        notificationsRequestInProgress: false,
      };
    }
  ),

  on(actionsFromNotifications.loadNotificationsSuccess, (state, action) => {
    return {
      ...state,
      notifications: [...state.notifications, ...action.notifications],
      notificationsRequestInProgress: false,
    };
  })
);
