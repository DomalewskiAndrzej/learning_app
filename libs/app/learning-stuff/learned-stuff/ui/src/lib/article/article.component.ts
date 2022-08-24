import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  TemplateRef,
} from '@angular/core';
import { Article } from '@app/app/learning-stuff/domain';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent {
  @Input() article: Article[];
  @ContentChild('exampleOnTop') exampleOnTop: TemplateRef<unknown>;
  @ContentChild('exampleOnBottom') exampleOnBottom: TemplateRef<unknown>;
}
