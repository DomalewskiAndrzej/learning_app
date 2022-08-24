import { Article } from '../../../interfaces/article.interface';

export const CHANGE_DETECTION_ZONE_JS_LIFECYCLE_HOOKS_ARTICLE: Article[] = [
  {
    title: 'Zones and async lifecycle hooks',
    description: [
      'Zone.js can create contexts that persist across asynchronous operations as well as provide lifecycle hooks for asynchronous operations.',
    ],
    translations: ['persist - trwać'],
  },
  {
    title: 'These hooks trigger under the following circumstances:',
    description: [
      'onScheduleTask - Triggers when a new asynchronous task is scheduled, such as when you call setTimeout().',
    ],
    translations: ['circumstances - okoliczności'],
  },
  {
    description: [
      'onInvokeTask - Triggers when an asynchronous task is about to execute, such as when the callback of setTimeout() is about to execute.',
      'onHasTask - Triggers when the status of one kind of task inside a zone changes from stable to unstable or from unstable to stable. A status of "stable" means there are no tasks inside the zone, while "unstable" means a new task is scheduled in the zone.',
      'onInvoke - Triggers when a synchronous function is going to execute in the zone.',
      'With these hooks, Zone can monitor the status of all synchronous and asynchronous operations inside a zone.',
      'The onXXXTask hooks trigger when the status of the task changes. The concept of a Zone Task is very similar to the JavaScript VM Task concept:',
      'macroTask: such as setTimeout()',
      'microTask: such as Promise.then()',
      'eventTask: such as element.addEventListener()',
      'All of the functions of Zone are provided by a library called Zone.js. This library implements those features by intercepting asynchronous APIs through monkey patching. Monkey patching is a technique to add or modify the default behavior of a function at runtime without changing the source code.',
    ],
  },
];
