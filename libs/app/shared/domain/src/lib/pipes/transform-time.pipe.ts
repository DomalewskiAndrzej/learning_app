import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformTime',
})
export class TransformTimePipe implements PipeTransform {
  transform(value: string): string {
    const tranformedTime = value
      .replaceAll('00', '')
      .split(':')
      .map((time: string, index: number) => {
        if (+time !== 0) {
          if (index === 0) {
            return this.replaceZeros(time) + ' hours';
          }
          return this.replaceZeros(time) + ' minutes';
        }
        return '';
      });
    if (tranformedTime[0] !== '' && tranformedTime[1] !== '') {
      return tranformedTime.join(' & ');
    }
    return tranformedTime.join('');
  }

  replaceZeros(value: string): string {
    const str = value.split('');
    if (str[0] === '0') {
      return str[1];
    }
    return value;
  }
}
