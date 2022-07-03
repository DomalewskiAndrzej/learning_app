import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PRIORITIES, Todo } from '@app/app/to-do/domain';

@Component({
  selector: 'app-ui-todo-add-dialog',
  templateUrl: './ui-todo-add-dialog.component.html',
  styleUrls: ['./ui-todo-add-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTodoAddDialogComponent implements OnInit {
  form: FormGroup;
  error = false;
  priorities = PRIORITIES;

  constructor(
    public dialogRef: MatDialogRef<UiTodoAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Todo
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    } else {
      this.error = true;
    }
  }

  initForm(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      timeToComplete: new FormControl(null, [Validators.required]),
      priority: new FormControl(null, [Validators.required]),
    });
  }
}
