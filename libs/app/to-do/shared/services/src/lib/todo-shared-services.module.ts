import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoDialogService } from './services/todo-dialog.service';

@NgModule({
  imports: [CommonModule],
  providers: [TodoDialogService],
})
export class TodoSharedServicesModule {}
