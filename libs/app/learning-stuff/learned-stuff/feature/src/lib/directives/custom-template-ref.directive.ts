import { Directive, Input, TemplateRef } from '@angular/core';
import {
  Article,
  AvailableLearnedStuffName,
} from '@app/app/learning-stuff/domain';

interface directiveCtx<TypeItem extends object> {
  article: Article[];
  label: Record<string, Article[]>;
}

@Directive({
  selector: 'ng-template[appCustomTemplateRef]',
})
export class CustomTemplateRefDirective<TypeItem extends object> {
  @Input() appCustomTemplateRef: AvailableLearnedStuffName[];

  @Input() appCustomTemplateRefDataType!: TypeItem | '';

  constructor(public readonly ref: TemplateRef<unknown>) {}

  static ngTemplateContextGuard<TypeContextItem extends object>(
    dir: CustomTemplateRefDirective<TypeContextItem>,
    ctx: unknown
  ): ctx is directiveCtx<TypeContextItem> {
    return true;
  }
}
