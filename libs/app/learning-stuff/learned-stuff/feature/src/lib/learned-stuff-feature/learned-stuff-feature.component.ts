import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  QueryList,
  TemplateRef,
  ViewChildren,
} from '@angular/core';
import {
  AVAILABLE_LEARNED_STUFF,
  AvailableLearnedStuffName,
} from '@app/app/learning-stuff/domain';
import {
  catchError,
  concatMap,
  delay,
  ignoreElements,
  Observable,
  of,
  tap,
} from 'rxjs';
import { CustomTemplateRefDirective } from '../directives/custom-template-ref.directive';

@Component({
  selector: 'app-learned-stuff-feature',
  templateUrl: './learned-stuff-feature.component.html',
  styleUrls: ['./learned-stuff-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LearnedStuffFeatureComponent implements AfterViewInit {
  AVAILABLE_LEARNED_STUFF = AVAILABLE_LEARNED_STUFF;
  AvailableLearnedStuffName = AvailableLearnedStuffName;

  availableTemplates: {
    [key in keyof typeof AVAILABLE_LEARNED_STUFF as string]: TemplateRef<unknown>;
  } = {};

  @ViewChildren(CustomTemplateRefDirective)
  templates: QueryList<CustomTemplateRefDirective<any>>;
  asyncPipeObservable$: Observable<string> = of(
    'Rendered',
    'Rendered2',
    'Async pipe, handle error'
  ).pipe(
    concatMap((name) => of(name).pipe(delay(1000))),
    tap((name) => {
      if (name.includes('error')) {
        throw new Error(name);
      }
    })
  );
  asyncPipeError$ = this.asyncPipeObservable$.pipe(
    ignoreElements(),
    catchError((error) => of(error))
  );
  runOutsideCDimg = 'assets/run-outside-CD.png';
  thirdPartyLibrariesWithCDimg = 'assets/third-party-libraries-with-cd.png';

  trackByFn(label: AvailableLearnedStuffName) {
    return label;
  }

  ngAfterViewInit(): void {
    this.templates.forEach((template) => {
      template.appCustomTemplateRef.forEach((name) => {
        this.availableTemplates[AvailableLearnedStuffName[name]] = template.ref;
      });
    });
  }
}
