import { Article } from '../../interfaces/article.interface';

export const ANGULAR_TEMPLATES_ARTICLE: Article[] = [
  {
    title: 'Introduction to the ng-template directive',
    description: [
      'Like the name indicates, the ng-template directive represents an Angular template: this means that the content of this tag will contain part of a template, that can be then be composed together with other templates in order to form the final component template.',
      'Angular is already using ng-template under the hood in many of the structural directives that we use all the time: ngIf, ngFor and ngSwitch.',
      "Ng-template tag is simply defining a template, with only it by yourself it won't show anything",
      'These two examples are doing the same but their code is different',
    ],
    img: 'assets/angular-template/example-1.png',
  },
  { img: 'assets/angular-template/example-2.png' },
  {
    translations: ['concise - zwięzły', 'desugaring - odcukrzanie'],
    description: [
      "This is what happens internally as Angular desugars the more concise *ngIf structural directive syntax. Let's break down what happened during the desugaring:",
      'The element onto which the structural directive ngIf was applied has been moved into an ng-template.',
      'The expression of *ngIf has been split up and applied to two separate directives, using the [ngIf] and [ngIfElse] template input variable syntax',
    ],
  },
  {
    title: 'Multiple Structural Directives',
    description: [
      "Let's see what happens if for example we try to use ngIf and ngFor in the same element:",
    ],
    img: 'assets/angular-template/example-3.png',
  },
  {
    description: [
      'This would not work! Instead, we would get the following error message:',
    ],
    img: 'assets/angular-template/example-4.png',
  },
  {
    description: [
      'This means that its not possible to apply two structural directives to the same element. In order to do so, we would have to do something similar to this:',
    ],
    img: 'assets/angular-template/example-5.png',
  },
  {
    description: [
      'In this example, we have moved the ngIf directive to an outer wrapping div, but in order for this to work we have to create that extra div element.',
      'This solution would already work, but is there a way to apply a structural directive to a section of the page without having to create an extra element?',
      'Yes and that is exactly what the ng-container structural directive allows us to do!',
    ],
  },
  {
    title: 'The ng-container directive',
    description: [
      'In order to avoid having to create that extra div, we can instead use ng-container directive:',
    ],
    img: 'assets/angular-template/example-6.png',
  },
  {
    description: [
      'As we can see, the ng-container directive provides us with an element that we can attach a structural directive to a section of the page, without having to create an extra element just for that.',
      'There is another major use case for the ng-container directive: it can also provide a placeholder for injecting a template dynamically into the page.',
    ],
  },
  {
    title: 'Dynamic Template Creation with the ngTemplateOutlet directive',
    description: [
      'Being able to create template references and point them to other directives such as ngIf is just the beginning.',
    ],
  },
  {
    translations: ['instantiate - instancja'],
    description: [
      'We can also take the template itself and instantiate it anywhere on the page, using the ngTemplateOutlet directive:',
    ],
    img: 'assets/angular-template/example-7.png',
  },
  {
    description: [
      'We can see here how ng-container helps with this use case: we are using it to instantiate on the page the loading template that we defined above.',
      'We are refering to the loading template via its template reference #loading, and we are using the ngTemplateOutlet structural directive to instantiate the template.',
      'We could add as many ngTemplateOutlet tags to the page as we would like, and instantiate a number of different templates. The value passed to this directive can be any expression that evaluates into a template reference.',
    ],
  },
  {
    title: 'Template Context',
    description: [
      'One key question about templates is, what is visible inside them?',
      'Does the template have its own separate variable scope, what variables can the template see?',
      'Inside the ng-template tag body, we have access to the same context variables that are visible in the outer template, such as for example the variable lessons.',
      'And this is because all ng-template instances have access also to the same context on which they are embedded.',
    ],
    translations: ['embedded - osadzony'],
  },
  {
    description: [
      'But each template can also define its own set of input variables! Actually, each template has associated a context object containing all the template-specific input variables.',
    ],
    translations: ['associated - powiązany'],
    img: 'assets/angular-template/example-8.png',
  },
  {
    description: [
      'Here is the breakdown of this example:',
      'This template, unlike the previous templates also has one input variable (it could also have several)',
      "The input variable is called lessonsCounter, and it's defined via a ng-template property using the prefix let-",
      'The variable lessonsCounter is visible inside the ng-template body, but not outside',
      'The content of this variable is determined by the expression that its assigned to the property let-lessonsCounter',
      'That expression is evaluated against a context object, passed to ngTemplateOutlet together with the template to instantiate',
    ],
    translations: ['evaluated - oceniany'],
  },
  {
    description: [
      'This context object must then have a property named estimate, for any value to be displayed inside the template',
      'The context object is passed to ngTemplateOutlet via the context property, that can receive any expression that evaluates to an object',
    ],
  },
  {
    title: 'Template References',
    description: [
      'The same way that we can refer to the loading template using a template reference, we can also have a template injected directly into our component using the ViewChild decorator:',
    ],
    img: 'assets/angular-template/example-9.png',
  },
  {
    description: [
      'As we can see, the template can be injected just like any other DOM element or component, by providing the template reference name defaultTabButtons to the ViewChild decorator.',
      'This means that templates are accessible also at the level of the component class, and we can do things such as for example pass them to child components!',
      'An example of why we would want to do that is to create a more customizable component, where can pass to it not only a configuration parameter or configuration object: we can also pass a template as an input parameter.',
    ],
  },
  {
    title: 'Configurable Components with Template Partial @Inputs',
    description: [
      "Let's take for example a tab container, where we would like to give the user of the component the possibility of configuring the look and feel of the tab buttons.",
      'Here is how that would look like, we would start by defining the custom template for the buttons in the parent component:',
    ],
    img: 'assets/angular-template/example-10.png',
  },
  {
    description: [
      'And then on the tab container component, we could define an input property which is also a template named headerTemplate:',
    ],
    img: 'assets/angular-template/example-11.png',
  },
  {
    description: [
      "A couple of things are going on here, in this final combined example. Let's break this down:",
      'There is a default template defined for the tab buttons, called defaultTabButtons',
      'This template will be used only if the input property headerTemplate remains undefined',
      'If the property is defined, then the custom input template passed via headerTemplate will be used to display the buttons instead',
      'The headers template is instantiated inside a ng-container placeholder, using the ngTemplateOutlet property',
      'The decision of which template to use (default or custom) is taken using a ternary expression, but if that logic was complex we could also delegate this to a controller method',
      'The end result of this design is that the tab container will display a default look and feel for the tab buttons if no custom template is provided, but it will use the custom template if its available.',
    ],
  },
  {
    title: 'Summary and Conclusions',
    description: [
      'The core directives ng-container, ng-template and ngTemplateOutlet all combine together to allow us to create highly dynamical and customizable components.',
      'We can even change completely the look and feel of a component based on input templates, and we can define a template and instantiate on multiple places of the application.',
    ],
  },
];
