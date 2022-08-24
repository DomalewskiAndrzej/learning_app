import { CHANGE_DETECTION_BASICS_ARTICLE } from '../articles/change-detection/change-detection-basics-article.const';
import { CHANGE_DETECTION_ZONE_JS_BASICS_ARTICLE } from '../articles/change-detection/change-detection-zone-js-basics-article.const';
import { CHANGE_DETECTION_ZONE_JS_LIFECYCLE_HOOKS_ARTICLE } from '../articles/change-detection/change-detection-zone-js-lifecycle-hooks-arcticle.const';
import { CHANGE_DETECTION_OPTIMIZATION_SLOW_COMPUTATIONS_ARTICLE } from '../articles/change-detection/change-detection-optimization-article.const';
import { CHANGE_DETECTION_ON_PUSH_ARTICLE } from '../articles/change-detection/change-detection-on-push-article.const';
import { CHANGE_DETECTOR_REFERENCE_ARTICLE } from '../articles/change-detection/change-detector-reference-article.const';
import { AvailableLearnedStuffName } from '../../enums/available-learned-stuff-name.enum';
import { Article } from '../../interfaces/article.interface';

export const AVAILABLE_LEARNED_STUFF_CHANGE_DETECTION: {
  [key in keyof typeof AvailableLearnedStuffName as string]: Article[];
} = {
  changeDetectionBasics: CHANGE_DETECTION_BASICS_ARTICLE,
  changeDetectionZoneJsBasics: CHANGE_DETECTION_ZONE_JS_BASICS_ARTICLE,
  changeDetectionZoneJsLifecycleHooks:
    CHANGE_DETECTION_ZONE_JS_LIFECYCLE_HOOKS_ARTICLE,
  changeDetectionOptimizationSlowComputations:
    CHANGE_DETECTION_OPTIMIZATION_SLOW_COMPUTATIONS_ARTICLE,
  changeDetectionOnPush: CHANGE_DETECTION_ON_PUSH_ARTICLE,
  changeDetectorReference: CHANGE_DETECTOR_REFERENCE_ARTICLE,
};
