import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnedStuffShellComponent } from './learned-stuff-shell/learned-stuff-shell.component';
import { RouterModule } from '@angular/router';
import { LearnedStuffShellRoutingModule } from './learned-stuff-shell-routing.module';

@NgModule({
  imports: [CommonModule, RouterModule, LearnedStuffShellRoutingModule],
  declarations: [LearnedStuffShellComponent],
})
export class LearnedStuffShellModule {}
