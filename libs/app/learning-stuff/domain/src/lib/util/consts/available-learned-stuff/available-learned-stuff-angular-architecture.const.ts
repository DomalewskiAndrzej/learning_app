import { AvailableLearnedStuffName } from '../../enums/available-learned-stuff-name.enum';
import { Article } from '../../interfaces/article.interface';
import { DOMAIN_DRIVEN_DESIGN_BASICS_ARTICLE } from '../articles/angular-architecture/domain-driven-design-article.const';

export const AVAILABLE_LEARNED_STUFF_ANGULAR_ARCHITECTURE: {
  [key in keyof typeof AvailableLearnedStuffName as string]: Article[] | string;
} = {
  domainDrivenDesignBasics: DOMAIN_DRIVEN_DESIGN_BASICS_ARTICLE,
};
