import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { TodoFacade } from '@app/app/to-do/data-access';
import { Todo, TodoService } from '@app/app/to-do/domain';
import { HomeFacade } from '@app/shared/data-access';
import { filter } from 'rxjs';

@Component({
  selector: 'app-feature-to-do-preview',
  templateUrl: './feature-to-do-preview.component.html',
  styleUrls: ['./feature-to-do-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TodoService],
})
export class FeatureToDoPreviewComponent implements OnDestroy {
  todos$ = this.todoFacade.getSelectedTodos$;

  constructor(
    private todoFacade: TodoFacade,
    private todoService: TodoService,
    private homeFacade: HomeFacade
  ) {}

  ngOnDestroy() {
    this.homeFacade.toggleSidenav();
  }

  onStartTodo(todo: Todo): void {}

  onEditTodo(todo: Todo): void {
    this.todoService
      .openEditTodoDialog(todo)
      .pipe(filter((todo: Todo) => !!todo))
      .subscribe((todo: Todo) => this.todoFacade.editTodo(todo));
  }
}
