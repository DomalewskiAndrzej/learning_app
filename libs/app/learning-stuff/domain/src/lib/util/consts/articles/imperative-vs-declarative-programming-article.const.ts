import { Article } from '../../interfaces/article.interface';

export const IMPRERATIVE_VS_DECLARATIVE_PROGRAMING_ARTICLE: Article[] = [
  {
    title: 'Imperative vs Declarative: A Brief Introduction',
    description: ['An imperative is an order:'],
    descriptionSubtitle: true,
    translations: [
      'imperative - tryb rozkazujący',
      'declarative - deklaracyjny',
      'brief - krótki',
    ],
  },
  {
    description: [
      'This is what you will do. If you are programming imperatively, you are telling your code how to work step by step: Get this data, then do this, then do that.',
    ],
  },
  { description: ['A declaration is a statement:'], descriptionSubtitle: true },
  {
    description: [
      'This is what I want. If you are programming declaratively, you are telling your code what you want. We set up pure functions (same inputs = same outputs) for our data sources to flow through which describe what we want. As our data sources change, our application will automatically react to these changes.',
    ],
  },
  {
    description: [
      'With RxJS, as soon as you subscribe to something to pull data out of a stream, you are coding imperatively',
    ],
    descriptionSubtitle: true,
  },
  {
    description: [
      'Simply using RxJS/Observables does not make your code reactive/declarative.',
      'The flow of a stream, and merging streams together into new streams that create new results, is the key concept behind reactive/declarative programming with RxJS. Once you subscribe you are manually pulling data out of the stream, rather than composing streams together to get the results you want automatically. This act of composing/combining streams together is where we are describing what we want to be done with all the data passing through the stream.',
      'You might imagine a factory line with conveyor belts and robotic arms picking parts and moving them around, like in Factorio. With this analogy, you can think of the conveyor belts as the observable streams, the items on those belts as the data being emitted from the streams, and the various robotic arms and other contraptions as the RxJS operators that combine/modify those streams:',
    ],
    translations: [
      'conveyor belts - przenośniki taśmowe',
      'various - różnorodny',
      'contraptions - urządzenia',
    ],
  },
];
