import {
  Directive,
  Input,
  OnDestroy,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appNotificationsContentProjection]',
})
export class NotificationsContentProjectionDirective implements OnDestroy {
  private readonly context =
    new NotificationsContentProjectionDirectiveContext();

  constructor(private readonly viewContainer: ViewContainerRef) {}

  @Input() set appNotificationsContentProjectionNotificationsRef(
    value: TemplateRef<unknown>
  ) {
    this.context.notificationsRef = value;
    this.createView();
  }

  @Input() set appNotificationsContentProjectionEmptyRef(
    value: TemplateRef<unknown>
  ) {
    this.context.emptyRef = value;
    this.createView();
  }

  @Input() set appNotificationsContentProjectionSpinnerRef(
    value: TemplateRef<unknown>
  ) {
    this.context.spinnerRef = value;
    this.createView();
  }

  @Input() set appNotificationsContentProjection(value: boolean) {
    this.context.notifications = value;
    this.createView();
  }

  @Input() set appNotificationsContentProjectionSpinner(value: boolean) {
    this.context.spinner = value;
    this.createView();
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
      context.notifications !== undefined &&
      context.spinner !== undefined &&
      context.notificationsRef !== undefined &&
      context.spinnerRef !== undefined &&
      context.emptyRef !== undefined
    );
  }

  ngOnDestroy(): void {
    this.viewContainer.clear();
  }

  private createView(): void {
    if (NotificationsContentProjectionDirective.checkContext(this.context)) {
      if (this.context.notifications) {
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.context.notificationsRef);
      } else if (this.context.spinner) {
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.context.spinnerRef);
      } else {
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.context.emptyRef);
      }
    }
  }
}

class NotificationsContentProjectionDirectiveContext {
  notifications: boolean;
  spinner: boolean;
  notificationsRef: TemplateRef<unknown>;
  emptyRef: TemplateRef<unknown>;
  spinnerRef: TemplateRef<unknown>;
}
