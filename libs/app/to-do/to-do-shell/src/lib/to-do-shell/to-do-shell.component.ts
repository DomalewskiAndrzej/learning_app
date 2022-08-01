import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TodoFacade } from '@app/app/to-do/data-access';
import { appConfig } from '@app/shared/resources';
import { filter, take } from 'rxjs';

@Component({
  selector: 'app-feature-to-do-table-shell',
  templateUrl: './to-do-shell.component.html',
  styleUrls: ['./to-do-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoShellComponent implements OnInit {
  constructor(private todoFacade: TodoFacade) {}

  ngOnInit(): void {
    this.todoFacade.getTodosExists$
      .pipe(
        filter((todo) => !todo),
        take(1)
      )
      .subscribe(() =>
        this.todoFacade.loadTodos({ offset: appConfig.firstItemLoad })
      );
  }
}
