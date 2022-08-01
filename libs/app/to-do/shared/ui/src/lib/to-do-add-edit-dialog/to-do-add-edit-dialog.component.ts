import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Todo, ToDoAddEditDialogData } from '@app/app/to-do/domain';
import { appConfig } from '@app/shared/resources';
import { TimeToCompleteValidator } from '../validators/time-to-complete.validator';

@Component({
  selector: 'app-to-do-add-edit-dialog',
  templateUrl: './to-do-add-edit-dialog.component.html',
  styleUrls: ['./to-do-add-edit-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoAddEditDialogComponent implements OnInit {
  form: FormGroup;
  error = false;
  priorities = appConfig.priorities;
  todo: Todo;
  editMode: boolean;

  constructor(
    public dialogRef: MatDialogRef<TodoAddEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ToDoAddEditDialogData
  ) {
    if (data) {
      this.todo = data?.todo;
      this.editMode = data?.editMode;
    }
  }

  ngOnInit(): void {
    this.initForm(this.todo, this.editMode);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.dialogRef.close({ ...this.todo, ...this.form.value });
    } else {
      this.error = true;
    }
  }

  initForm(todo: Todo, editMode: boolean): void {
    this.form = new FormGroup({
      name: new FormControl(editMode ? todo?.name : null, [
        Validators.required,
      ]),
      description: new FormControl(editMode ? todo?.description : null, [
        Validators.required,
      ]),
      timeToComplete: new FormControl(
        editMode ? todo?.timeToComplete : '00:00',
        [Validators.required, TimeToCompleteValidator()]
      ),
      priority: new FormControl(editMode ? todo?.priority : null, [
        Validators.required,
      ]),
    });
  }
}
