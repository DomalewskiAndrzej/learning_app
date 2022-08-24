import { AvailableLearnedStuffName } from '../../enums/available-learned-stuff-name.enum';
import { Article } from '../../interfaces/article.interface';
import { EXPLANATION_OF_DIRECTIVES_ARTICLE } from '../articles/directives-and-pipes/explanation-of-directives-article.const';
import { PURE_VS_IMPURE_PIPES_ARTICLE } from '../articles/directives-and-pipes/pure-vs-impure-pipes-article.const';

export const AVAILABLE_LEARNED_STUFF_DIRECTIVES_AND_PIPES: {
  [key in keyof typeof AvailableLearnedStuffName as string]: Article[] | string;
} = {
  asyncPipeWithNgIf: 'Async Pipe With NgIf',
  explanationOfDirectives: EXPLANATION_OF_DIRECTIVES_ARTICLE,
  pureVsImpurePipes: PURE_VS_IMPURE_PIPES_ARTICLE,
};
