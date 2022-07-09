import { Todo } from '@app/app/to-do/domain';

export interface ToDoAddEditDialogData {
  todo: Todo;
  editMode: boolean;
}
