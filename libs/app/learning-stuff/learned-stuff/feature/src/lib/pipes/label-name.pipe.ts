import { Pipe, PipeTransform } from '@angular/core';
import { AvailableLearnedStuffName } from '@app/app/learning-stuff/domain';

@Pipe({
  name: 'labelName',
})
export class LabelNamePipe implements PipeTransform {
  transform(value: string | unknown): string {
    return AvailableLearnedStuffName[value as any] as string;
  }
}
