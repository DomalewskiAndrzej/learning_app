import { Article } from '../../../interfaces/article.interface';

export const CHANGE_DETECTION_BASICS_ARTICLE: Article[] = [
  {
    title: 'Basics about Change Detection',
    description: [
      'At a high level, Angular walks your components from top to bottom, looking for changes. Angular runs its change detection mechanism periodically so that changes to the data model are reflected in an application’s view. ',
    ],
    translations: ['periodically - cyklicznie', 'reflected - odzwierciedlenie'],
  },
  {
    title: 'When apps update HTML',
    description: [
      'To understand how change detection works, first consider when the application needs to update the HTML. Typically, updates occur for one of the following reasons:',
      '1. Component initialization. For example, when bootstrapping an Angular application, Angular loads the bootstrap component and triggers the ApplicationRef.tick() to call change detection and View Rendering.',
      '2. Event listener. The DOM event listener can update the data in an Angular component and also trigger change detection.',
      '3. HTTP Data Request. You can also get data from a server through an HTTP request',
      '4. MacroTasks, such as setTimeout() or setInterval(). You can also update the data in the callback function of a macroTask such as setTimeout().',
      '5. MicroTasks, such as Promise.then(). Other asynchronous APIs return a Promise object (such as fetch), so the then() callback function can also update the data.',
      '6. Other async operations. In addition to addEventListener(), setTimeout() and Promise.then(), there are other operations that can update the data asynchronously. Some examples include WebSocket.onmessage() and Canvas.toBlob(). The preceding list contains most common scenarios in which the application might change the data. Angular runs change detection whenever it detects that data could have changed. The result of change detection is that the DOM is updated with new data. Angular detects the changes in different ways. For component initialization, Angular calls change detection explicitly. For asynchronous operations, Angular uses a zone to detect changes in places where the data could have possibly mutated and it runs change detection automatically.',
    ],
    translations: ['explicitly: - wyraźnie', 'addition - dodatek'],
  },
];
