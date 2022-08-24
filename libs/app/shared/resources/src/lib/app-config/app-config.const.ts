export const appConfig = {
  itemsPerLoad: 5,
  todoTableDisplayedColums: [
    'id',
    'name',
    'timeToComplete',
    'priority',
    'options',
  ],
  priorities: {
    highest: 'HIGHEST',
    high: 'HIGH',
    medium: 'MEDIUM',
    low: 'LOW',
    lowest: 'LOWEST',
  },
  snackbarDuration: 4000,
  paginatorOptions: {
    pageSize: 5,
    pageIndex: 0,
    pageSizeOptions: [5, 10, 20],
    showFirstLastButtons: true,
    length: 5,
  },
  routingTypes: {
    startingPage: '',
    todo: 'to-do',
    todoList: 'list',
    todoPreview: 'preview',
    loginPage: 'login',
  },
} as const;
