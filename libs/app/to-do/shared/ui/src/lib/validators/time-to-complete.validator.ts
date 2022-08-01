import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function TimeToCompleteValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value === '00:00' ? { invalidTime: true } : null;
  };
}
