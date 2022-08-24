import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function TimeToCompleteFormatValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const val = control.value;
    const splittedVal = val.split(':');

    return (val.length !== 5 && !val.includes(':')) ||
      splittedVal[0].length !== 2 ||
      splittedVal[1].length !== 2 ||
      (!+splittedVal[0] && +splittedVal[0] !== 0) ||
      (!+splittedVal[1] && +splittedVal[1] !== 0)
      ? { invalidFormat: true }
      : null;
  };
}
