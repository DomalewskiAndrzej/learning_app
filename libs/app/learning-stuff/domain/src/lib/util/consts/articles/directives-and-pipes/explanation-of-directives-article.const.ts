import { Article } from '../../../interfaces/article.interface';

export const EXPLANATION_OF_DIRECTIVES_ARTICLE: Article[] = [
  {
    title: 'Component',
    description: [
      "Components are actually directives with templates. Structural and Attributes Directives don't have templates. The only difference for Components between Structural Directives and Attributes Directives is the templates. So, in short, Component is a more polished version of Directives.",
    ],
    translations: ['more polished - bardziej dopracowany'],
  },
  {
    title: 'Attributes Directives',
    description: [
      'Attribute directives change the behaviour and appearance of the document object model (DOM). Attributes Directives have the same appearance as standard HTML attributes. Attribute directives only affect or change the element they are added to.',
    ],
    translations: ['appearance - wygląd zewnętrzny'],
  },
  {
    title: 'Attributes Directives',
    description: [
      'While Attribute Directives only affect the element they are added to, Structural Directives affect a whole area in the DOM since Structural Directives allow elements to be added or removed. Structural Directives also have the same appearance as standard HTML attributes but with a leading *. The asterisk symbol is telling Angular to surround the host element into an <ng-template>.',
    ],
    translations: ['appearance - wygląd zewnętrzny'],
  },
];
