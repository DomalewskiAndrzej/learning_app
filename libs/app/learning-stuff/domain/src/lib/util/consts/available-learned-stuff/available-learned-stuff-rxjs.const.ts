import { AvailableLearnedStuffName } from '../../enums/available-learned-stuff-name.enum';
import { Article } from '../../interfaces/article.interface';
import { RXJS_OBSERVABLE_VS_SUBJECT_ARTICLE } from '../articles/rxjs/rxjs-observable-vs-subject-article.const';
import { RXJS_COLD_VS_HOT_OBSERVABLE_ARTICLE } from '../articles/rxjs/rxjs-cold-vs-hot-observable-article.const';

export const AVAILABLE_LEARNED_STUFF_RXJS: {
  [key in keyof typeof AvailableLearnedStuffName as string]: Article[];
} = {
  rxjsColdVsHotObservable: RXJS_COLD_VS_HOT_OBSERVABLE_ARTICLE,
  rxjsObservableVsSubject: RXJS_OBSERVABLE_VS_SUBJECT_ARTICLE,
};
