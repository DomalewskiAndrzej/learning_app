import {
  Directive,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appNotificationsContentProjection]',
})
export class NotificationsContentProjectionDirective
  implements OnDestroy, OnInit, OnChanges
{
  @Input()
  appNotificationsContentProjectionEmptyRef: TemplateRef<unknown>;
  @Input()
  appNotificationsContentProjectionNotificationsRef: TemplateRef<unknown>;
  private readonly context =
    new NotificationsContentProjectionDirectiveContext();

  constructor(
    private readonly viewContainer: ViewContainerRef,
    private readonly templateRef: TemplateRef<unknown>
  ) {}

  @Input() set appNotificationsContentProjection(value: boolean) {
    this.context.isNotification = value;
  }

  @Input() set appNotificationsContentProjectionSpinner(value: boolean) {
    this.context.spinner = value;
  }

  static ngTemplateContextGuard(
    directive: NotificationsContentProjectionDirective,
    context: unknown
  ): context is NotificationsContentProjectionDirectiveContext {
    return true;
  }

  static checkContext(
    context: NotificationsContentProjectionDirectiveContext
  ): boolean {
    return (
      context.isNotification !== undefined &&
      context.spinner !== undefined &&
      context.notificationsRef !== undefined &&
      context.emptyRef !== undefined
    );
  }

  ngOnDestroy(): void {
    this.viewContainer.clear();
  }

  ngOnInit(): void {
    this.context.notificationsRef =
      this.appNotificationsContentProjectionNotificationsRef;
    this.context.emptyRef = this.appNotificationsContentProjectionEmptyRef;
    this.createView();
  }

  ngOnChanges(): void {
    this.createView();
  }

  private createView(): void {
    if (!NotificationsContentProjectionDirective.checkContext(this.context)) {
      return;
    }
    if (this.context.isNotification) {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.context.notificationsRef);
      return;
    }
    if (this.context.spinner) {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
      return;
    }
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.context.emptyRef);
    return;
  }
}

class NotificationsContentProjectionDirectiveContext {
  isNotification: boolean;
  spinner: boolean;
  notificationsRef: TemplateRef<unknown>;
  emptyRef: TemplateRef<unknown>;
}
