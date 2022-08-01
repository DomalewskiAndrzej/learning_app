import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { TodoFacade } from '@app/app/to-do/data-access';
import { Todo } from '@app/app/to-do/domain';
import { HomeFacade } from '@app/shared/data-access';
import { TodoDialogService } from '../../services/todo-dialog.service';

@Component({
  selector: 'app-feature-to-do-preview',
  templateUrl: './feature-to-do-preview.component.html',
  styleUrls: ['./feature-to-do-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureToDoPreviewComponent implements OnDestroy {
  todos$ = this.todoFacade.getSelectedTodos$;

  constructor(
    private todoFacade: TodoFacade,
    private todoDialogService: TodoDialogService,
    private homeFacade: HomeFacade
  ) {}

  ngOnDestroy() {
    this.homeFacade.toggleSidenav();
  }

  onStartTodo(todo: Todo): void {
    this.todoFacade.startTodo(todo);
  }

  onEditTodo(todo: Todo): void {
    this.todoDialogService.editTodo(todo);
  }
}
