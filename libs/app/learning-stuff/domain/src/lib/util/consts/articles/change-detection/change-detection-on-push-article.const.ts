import { Article } from '../../../interfaces/article.interface';

export const CHANGE_DETECTION_ON_PUSH_ARTICLE: Article[] = [
  {
    title: 'Using OnPush',
    description: [
      'OnPush change detection instructs Angular to run change detection for a component subtree only when:',
      'The root component of the subtree receives new inputs as the result of a template binding. Angular compares the current and past value of the input with ==',
      "Angular handles an event (e.g. using event binding, output binding, or @HostListener) in the subtree's root component or any of its children whether they are using OnPush change detection or not.",
    ],
  },
  {
    title: 'Common change detection scenarios',
    description: [
      "This section examines several common change detection scenarios to illustrate Angular's behavior.",
    ],
  },
  {
    title: 'An event is handled by a component with default change detection',
    description: [
      'If Angular handles an event within a component without OnPush strategy, the framework executes change detection on the entire component tree. Angular will skip descendant component subtrees with roots using OnPush, which have not received new inputs.',
    ],
    translations: ['descendant - potomek'],
  },
  {
    description: [
      'As an example, if we set the change detection strategy of MainComponent to OnPush and the user interacts with a component outside the subtree with root MainComponent, Angular will check all the green components from the diagram below (AppComponent, HeaderComponent, SearchComponent, ButtonComponent) unless MainComponent receives new inputs:',
    ],
    translations: ['unless - chyba, że'],
    img: 'assets/change-detection-on-push/example-1.png',
  },
  {
    title: 'An event is handled by a component with OnPush',
    description: [
      'If Angular handles an event within a component with OnPush strategy, the framework will execute change detection within the entire component tree. Angular will ignore component subtrees with roots using OnPush, which have not received new inputs and are outside the component which handled the event.',
    ],
    translations: ['within a - w ramach'],
  },
  {
    description: [
      'As an example, if Angular handles an event within MainComponent, the framework will run change detection in the entire component tree. Angular will ignore the subtree with root LoginComponent because it has OnPush and the event happened outside of its scope.',
    ],
    img: 'assets/change-detection-on-push/example-2.png',
  },
  {
    title: 'An event is handled by a descendant of a component with OnPush',
    description: [
      'If Angular handles an event in a component with OnPush, the framework will execute change detection in the entire component tree, including the component’s ancestors.',
    ],
    translations: ['descendant - potomek', 'ancestors - przodkowie'],
  },
  {
    description: [
      'As an example, in the diagram below, Angular handles an event in LoginComponent which uses OnPush. Angular will invoke change detection in the entire component subtree including MainComponent (LoginComponent’s parent), even though MainComponent has OnPush as well. Angular checks MainComponent as well because LoginComponent is part of its view.',
    ],
    img: 'assets/change-detection-on-push/example-3.png',
  },
  {
    title: 'New inputs to component with OnPush',
    description: [
      'Angular will run change detection within a child component with OnPush setting an input property as result of a template binding.',
    ],
  },
  {
    description: [
      'For example, in the diagram below, AppComponent passes a new input to MainComponent, which has OnPush. Angular will run change detection in MainComponent but will not run change detection in LoginComponent, which also has OnPush, unless it receives new inputs as well.',
    ],
    img: 'assets/change-detection-on-push/example-4.png',
  },
  {
    title: 'Edge cases',
    description: ['Modifying input properties in TypeScript code.'],
    descriptionSubtitle: true,
  },
  {
    description: [
      ' When you use an API like @ViewChild or @ContentChild to get a reference to a component in TypeScript and manually modify an @Input property, Angular will not automatically run change detection for OnPush components. If you need Angular to run change detection, you can inject ChangeDetectorRef in your component and call changeDetectorRef.markForCheck() to tell Angular to schedule a change detection.',
    ],
  },
  {
    description: ['Modifying object references.'],
    descriptionSubtitle: true,
  },
  {
    description: [
      ' In case an input receives a mutable object as value and you modify the object but preserve the reference, Angular will not invoke change detection. That’s the expected behavior because the previous and the current value of the input point to the same reference.',
    ],
    translations: ['preserve - utrzymywać', 'point to - wskazują na'],
  },
];
