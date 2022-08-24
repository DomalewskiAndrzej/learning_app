import { AVAILABLE_LEARNED_STUFF_CHANGE_DETECTION } from './available-learned-stuff-change-detection.const';
import { AvailableLearnedStuffName } from '../../enums/available-learned-stuff-name.enum';
import { AVAILABLE_LEARNED_STUFF_RXJS } from './available-learned-stuff-rxjs.const';
import { ANGULAR_TEMPLATES_ARTICLE } from '../articles/angular-templates-article.const';
import { IMPRERATIVE_VS_DECLARATIVE_PROGRAMING_ARTICLE } from '../articles/imperative-vs-declarative-programming-article.const';
import { Article } from '../../interfaces/article.interface';
import { AVAILABLE_LEARNED_STUFF_DIRECTIVES_AND_PIPES } from './available-learned-stuff-directives-and-pipes.const';
import { AVAILABLE_LEARNED_STUFF_ANGULAR_ARCHITECTURE } from './available-learned-stuff-angular-architecture.const';

export const AVAILABLE_LEARNED_STUFF: {
  [key in keyof typeof AvailableLearnedStuffName as string]:
    | Article[]
    | string
    | Record<string, Article[] | string>;
} = {
  directivesAndPipes: AVAILABLE_LEARNED_STUFF_DIRECTIVES_AND_PIPES,
  globalErrorHandling: 'Global Error Handling',
  imperativeVsDeclarativeProgramming:
    IMPRERATIVE_VS_DECLARATIVE_PROGRAMING_ARTICLE,
  angularTemplates: ANGULAR_TEMPLATES_ARTICLE,
  changeDetection: AVAILABLE_LEARNED_STUFF_CHANGE_DETECTION,
  rxjs: AVAILABLE_LEARNED_STUFF_RXJS,
  angularArchitecture: AVAILABLE_LEARNED_STUFF_ANGULAR_ARCHITECTURE,
};
