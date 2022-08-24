import { Injectable } from '@angular/core';

@Injectable()
export class TimeParser {
  getCurrentParsedTime(): number {
    return new Date().getTime() / 1000;
  }

  calcTodoTimeToComplete(timeToComplete: string): number {
    const splittedTime = timeToComplete.split(':');
    return +splittedTime[0] * 3600 + +splittedTime[1] * 60;
  }

  calcIfTodoIsOutdated(timeToComplete: string, dateOfStart: number): boolean {
    return (
      this.calcTodoTimeToComplete(timeToComplete) + dateOfStart <
      this.getCurrentParsedTime()
    );
  }
}
