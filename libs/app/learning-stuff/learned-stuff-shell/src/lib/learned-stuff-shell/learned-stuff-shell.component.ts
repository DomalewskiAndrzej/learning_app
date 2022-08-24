import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-learned-stuff-shell',
  templateUrl: './learned-stuff-shell.component.html',
  styleUrls: ['./learned-stuff-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LearnedStuffShellComponent {}
