import { Article } from '../../../interfaces/article.interface';

export const CHANGE_DETECTION_OPTIMIZATION_SLOW_COMPUTATIONS_ARTICLE: Article[] =
  [
    {
      title: 'Optimizing slow computations',
      description: [
        'There are several techniques to eliminate slow computations:',
      ],
      translations: ['computations - obliczenia'],
    },
    {
      description: ['Optimizing the underlying algorithm.'],
      descriptionSubtitle: true,
    },
    {
      description: [
        'This is the recommended approach; if you can speed up the algorithm that is causing the problem, you can speed up the entire change detection mechanism.',
      ],
    },
    { description: ['Caching using pure pipes.'], descriptionSubtitle: true },
    {
      description: [
        'You can move the heavy computation to a pure pipe. Angular will reevaluate a pure pipe only if it detects that its inputs changed, compared to the previous time Angular called it.',
      ],
      translations: ['reevaluate - przewartościować'],
    },
    { description: ['Using memoization.'], descriptionSubtitle: true },
    {
      description: [
        'Memoization is a similar technique to pure pipes, with the difference that pure pipes preserve only the last result from the computation where memoization could store multiple results.',
      ],
      translations: ['preserve - utrzymywać'],
    },
    {
      description: ['Avoid repaints/reflows in lifecycle hooks.'],
      translations: ['repaints - przemalowanie', 'reflows - ponowne przepływy'],
      descriptionSubtitle: true,
    },
    {
      description: [
        'Certain operations cause the browser to either synchronously recalculate the layout of the page or re-render it. Since reflows and repaints are generally slow, we want to avoid performing them in every change detection cycle.',
      ],
    },
    {
      title: 'Conclusion',
      description: [
        'Pure pipes and memoization have different trade-offs. Pure pipes are an Angular built-in concept compared to memoization, which is a general software engineering practice for caching function results. The memory overhead of memoization could be significant if you invoke the heavy computation frequently with different arguments.',
      ],
      translations: [
        'trade-offs - kompromisy',
        'overhead - narzut',
        'significant - istotne',
      ],
    },
  ];
