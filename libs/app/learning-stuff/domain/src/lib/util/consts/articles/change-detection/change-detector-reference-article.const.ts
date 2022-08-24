import { Article } from '../../../interfaces/article.interface';

export const CHANGE_DETECTOR_REFERENCE_ARTICLE: Article[] = [
  {
    title: 'ChangeDetectorRef',
    description: [
      'Base class that provides change detection functionality. A change-detection tree collects all views that are to be checked for changes. Use the methods to add and remove views from the tree, initiate change-detection, and explicitly mark views as dirty, meaning that they have changed and need to be re-rendered.',
    ],
    img: 'assets/change-detector/reference.png',
  },
  {
    title: 'Methods',
    description: ['markForCheck()'],
    descriptionSubtitle: true,
  },
  {
    description: [
      'When a view uses the OnPush (checkOnce) change detection strategy, explicitly marks the view as changed so that it can be checked again.',
    ],
    translations: ['explicitly - wyraźnie'],
  },
  {
    description: [
      'Components are normally marked as dirty (in need of rerendering) when inputs have changed or events have fired in the view. Call this method to ensure that a component is checked even if these triggers have not occurred.',
    ],
  },
  { description: ['detach()'], descriptionSubtitle: true },
  {
    description: [
      'Detaches this view from the change-detection tree. A detached view is not checked until it is reattached. Use in combination with detectChanges() to implement local change detection checks.',
      'Detached views are not checked during change detection runs until they are re-attached, even if they are marked as dirty.',
    ],
  },
  { description: ['detectChanges()'], descriptionSubtitle: true },
  {
    description: [
      'Checks this view and its children. Use in combination with detach to implement local change detection checks.',
    ],
  },
  { description: ['checkNoChanges()'], descriptionSubtitle: true },
  {
    description: [
      'Checks the change detector and its children, and throws if any changes are detected.',
      "Use in development mode to verify that running change detection doesn't introduce other changes. Calling it in production mode is a noop.",
    ],
  },

  { description: ['reattach()'], descriptionSubtitle: true },
  {
    description: [
      'Re-attaches the previously detached view to the change detection tree. Views are attached to the tree by default.',
    ],
  },
  {
    title: 'Usage notes',
    description: [
      'The following examples demonstrate how to modify default change-detection behavior to perform explicit detection when needed.',
    ],
  },
  {
    title: 'Use markForCheck() with CheckOnce strategy',
    description: [
      'The following example sets the OnPush change-detection strategy for a component (CheckOnce, rather than the default CheckAlways), then forces a second check after an interval.',
    ],
    img: 'assets/change-detector/reference-example-1.png',
  },
  {
    title: 'Detach change detector to limit how often check occurs',
    description: [
      "The following example defines a component with a large list of read-only data that is expected to change constantly, many times per second. To improve performance, we want to check and update the list less often than the changes actually occur. To do that, we detach the component's change detector and perform an explicit local check every five seconds.",
    ],
    img: 'assets/change-detector/reference-example-2.png',
  },
  {
    title: 'Reattaching a detached component',
    description: [
      'The following example creates a component displaying live data. The component detaches its change detector from the main change detector tree when the live property is set to false, and reattaches it when the property becomes true.',
    ],
    img: 'assets/change-detector/reference-example-3.png',
  },
];
