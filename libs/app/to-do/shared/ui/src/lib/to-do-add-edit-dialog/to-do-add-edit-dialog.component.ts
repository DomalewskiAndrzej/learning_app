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
import { TimeToCompleteValueValidator } from '../validators/time-to-complete-value.validator';
import { TimeToCompleteFormatValidator } from '../validators/time-to-complete-format.validator';

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
      const todo = {
        timeToComplete: this.form.controls['timeToComplete'].value,
        priority: this.form.controls['priority'].value,
        information: {
          name: this.form.controls['name'].value,
          description: this.form.controls['description'].value,
        },
      };
      this.dialogRef.close({ ...this.todo, ...todo });
    } else {
      this.error = true;
    }
  }

  private initForm(todo: Todo, editMode: boolean): void {
    this.form = new FormGroup({
      name: new FormControl(editMode ? todo?.information.name : null, [
        Validators.required,
      ]),
      description: new FormControl(
        editMode ? todo?.information.description : null,
        [Validators.required]
      ),
      timeToComplete: new FormControl(
        editMode ? todo?.timeToComplete : '00:00',
        [
          Validators.required,
          TimeToCompleteValueValidator(),
          TimeToCompleteFormatValidator(),
        ]
      ),
      priority: new FormControl(editMode ? todo?.priority : null, [
        Validators.required,
      ]),
    });
  }
}
