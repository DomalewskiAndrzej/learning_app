import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoShellComponent } from './to-do-shell/to-do-shell.component';
import { RouterModule } from '@angular/router';
import { ToDoShellRoutingModule } from './to-do-shell-routing.module';
import { ToDoDataAccessModule } from '@app/app/to-do/data-access';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ToDoShellRoutingModule,
    ToDoDataAccessModule,
  ],
  declarations: [ToDoShellComponent],
})
export class ToDoShellModule {}
