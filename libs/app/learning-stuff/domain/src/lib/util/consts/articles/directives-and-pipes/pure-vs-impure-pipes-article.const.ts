import { Article } from '../../../interfaces/article.interface';

export const PURE_VS_IMPURE_PIPES_ARTICLE: Article[] = [
  {
    title: 'Pure pipe',
    description: [
      'A pure pipe is only called when Angular detects a change in the value or the parameters passed to a pipe',
    ],
  },
  {
    title: 'Impure pipe',
    description: [
      'An impure pipe is called for every change detection cycle no matter whether the value or parameter(s) changes',
    ],
    translations: ['whether - czy'],
  },
  {
    title: 'Pure & impure Pipes',
    description: [
      'Pure pipes are the pipes which are executed only when a “PURE CHANGE” to the input value is detected. So impure pipe executes everytime irrespective of source has changed or not. Which leads to bad performance. thats why it is not recommneded to use pipes for filtering data.',
    ],
    translations: ['irrespective - niezależny'],
  },
  {
    description: ['Example:'],
    img: 'assets/pipe-config.png',
  },
];
