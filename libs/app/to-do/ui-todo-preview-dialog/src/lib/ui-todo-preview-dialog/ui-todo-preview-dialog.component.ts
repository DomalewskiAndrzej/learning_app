import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-todo-preview-dialog',
  templateUrl: './ui-todo-preview-dialog.component.html',
  styleUrls: ['./ui-todo-preview-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTodoPreviewDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
