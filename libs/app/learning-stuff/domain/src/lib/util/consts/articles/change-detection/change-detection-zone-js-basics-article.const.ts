import { Article } from '../../../interfaces/article.interface';

export const CHANGE_DETECTION_ZONE_JS_BASICS_ARTICLE: Article[] = [
  {
    title: 'Resolving Zone Pollution(Używanie ngZone.runOutsideOfAngular())',
    description: [
      'Zone.js is a signaling mechanism that Angular uses to detect when an application state might have changed. It captures asynchronous operations like setTimeout, network requests, and event listeners. Angular schedules change detection based on signals from Zone.js.',
    ],
    translations: ['pollution - polucja', 'schedules - planuje'],
  },
  {
    title: 'Run tasks outside NgZone',
    description: [
      'In such cases, we can instruct Angular to avoid calling change detection for tasks scheduled by a given piece of code using NgZone.',
      "The snippet below instructs Angular that it should execute the setInterval call outside the Angular Zone and skip running change detection after pollForUpdates runs. Third-party libraries commonly trigger unnecessary change detection cycles because they weren't authored with Zone.js in mind. Avoid these extra cycles by calling library APIs outside the Angular zone.",
      "Running Plotly.newPlot('chart', data); within runOutsideAngular instructs the framework that it shouldn’t execute change detection after the execution of tasks scheduled by the initialization logic. For example, if Plotly.newPlot('chart', data) adds event listeners to a DOM element, Angular will not execute change detection after the execution of their handlers.",
    ],
  },
];
