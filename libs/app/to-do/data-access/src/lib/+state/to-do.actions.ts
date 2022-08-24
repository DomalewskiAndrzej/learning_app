import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Todo } from '@app/app/to-do/domain';
import { LoadItems } from '@app/shared/domain';

export const actionsFromTodo = createActionGroup({
  source: 'Todo',
  events: {
    'Load Todos': props<{ payload: LoadItems }>(),
    'Load Todos Success': props<{ payload: Todo[] }>(),
    'Load Todos Failure': props<{ error: Error }>(),
    'Load Todos Quantity': emptyProps(),
    'Load Todos Quantity Success': props<{ payload: number }>(),
    'Load Todos Quantity Failure': props<{ error: Error }>(),
    'Start Todo': props<{ payload: Todo }>(),
    'Start Todo Success': props<{ payload: Todo }>(),
    'Start Todo Failure': props<{ error: Error }>(),
    'Finish Todo': props<{ payload: Todo }>(),
    'Finish Todo Success': props<{ payload: Todo }>(),
    'Finish Todo Failure': props<{ error: Error }>(),
    'Add Todo': props<{ payload: Todo }>(),
    'Add Todo Success': props<{ payload: Todo }>(),
    'Add Todo Failure': props<{ error: Error }>(),
    'Delete Todo': props<{ payload: string }>(),
    'Delete Todo Success': props<{ payload: string }>(),
    'Delete Todo Failure': props<{ error: Error }>(),
    'Delete Todos': props<{ payload: string[] }>(),
    'Delete Todos Success': props<{ payload: string[] }>(),
    'Delete Todos Failure': props<{ error: Error }>(),
    'Edit Todo': props<{ payload: Todo }>(),
    'Edit Todo Success': props<{ payload: Todo }>(),
    'Edit Todo Failure': props<{ error: Error }>(),
    'Select Todos': props<{ payload: Todo[] }>(),
  },
});
