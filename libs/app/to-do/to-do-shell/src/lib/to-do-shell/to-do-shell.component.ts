import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-to-do-table-shell',
  templateUrl: './to-do-shell.component.html',
  styleUrls: ['./to-do-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoShellComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
