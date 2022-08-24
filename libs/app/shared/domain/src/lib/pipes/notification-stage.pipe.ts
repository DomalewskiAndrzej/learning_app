import { Pipe, PipeTransform } from '@angular/core';
import { TimeParser } from '../services/time-parser.service';
import { NotificationsStage } from '../utils/enums/notification-stage.enum';

@Pipe({
  name: 'notificationStage',
})
export class NotificationStagePipe implements PipeTransform {
  constructor(private timeParser: TimeParser) {}

  transform(
    dateOfStart: number,
    timeToComplete: string,
    completed: boolean
  ): string {
    const isOutdated = this.timeParser.calcIfTodoIsOutdated(
      timeToComplete,
      dateOfStart
    );
    if (isOutdated) {
      return NotificationsStage.outdated;
    }
    if (completed) {
      return NotificationsStage.completed;
    }
    return NotificationsStage.inProgress;
  }
}
