import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-layout-shell',
  templateUrl: './layout-shell.component.html',
  styleUrls: ['./layout-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutShellComponent {}
