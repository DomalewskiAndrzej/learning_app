import { Article } from '../../../interfaces/article.interface';

export const RXJS_OBSERVABLE_VS_SUBJECT_ARTICLE: Article[] = [
  {
    title: 'Observable vs subject',
    description: [
      'In stream programming there are two main interfaces: Observable and Observer.',
      'Observable is for the consumer, it can be transformed and subscribed:',
      'observable.map(x => ...).filter(x => ...).subscribe(x => ...)',
      'Observer is the interface which is used to feed an observable source:',
      'observer.next(newItem)',
      'We can create new Observable with an Observer:',
    ],
    img: 'assets/rxjs-observable-vs-subject/example-1.png',
  },
  {
    description: [
      'Or, we can use a Subject which implements both the Observable and the Observer interfaces:',
    ],
    img: 'assets/rxjs-observable-vs-subject/example-2.png',
  },
  {
    title:
      'Observables are unicast by design and Subjects are multicast by design.',
    description: [
      'If you look at the below example - each subscription receives the different values as observables developed as unicast by design.',
    ],
    img: 'assets/rxjs-observable-vs-subject/example-3.png',
  },
  {
    description: [
      'This could be weird if you are expecting the same values on both the subscription.',
    ],
  },
  {
    img: 'assets/rxjs-observable-vs-subject/example-4.png',
    description: [
      'We can overcome this issue using Subjects. Subjects is similar to event-emitter and it does not invoke for each subscription. consider the below example.',
    ],
  },
  { description: ['Both the subscription are got the same output value!'] },
  {
    title: 'Observables',
    description: [
      '1. They are cold: Code gets executed when they have at least a single observer.',
      '2. Creates copy of data: Observable creates copy of data for each observer.',
      '3. Uni-directional: Observer can not assign value to observable(origin/master).',
      '4. The code will run for each observer . If its a HTTP call, it gets called for each observer.',
      '5. If its a service we want to share among all the components, it wont have latest result all new subscribers will still subscribe to same observable and get value from scratch',
    ],
    translations: ['from scratch - od zera'],
  },
  {
    description: [
      '6. Unicast means can emit values from the observable not from any other component.',
    ],
  },
  {
    description: [
      '1. They are hot: code gets executed and value gets broadcast even if there is no observer.',
    ],
    title: 'Subject',
    translations: ['broadcast - nadawać'],
  },
  {
    description: [
      '2. Shares data: Same data get shared between all observers.',
      '3. bi-directional: Observer can assign value to observable(origin/master).',
      '4. If are using using subject then you miss all the values that are broadcast before creation of observer. So here comes Replay Subject',
    ],
    translations: ['broadcast - nadawać'],
  },
  {
    description: [
      '5. Multicast, can cast values to multiple subscribers and can act as both subscribers and emmitter',
    ],
    translations: ['cast - rzucać'],
  },
];
