import { NavigationLink } from '../types/navigation-link.type';
import { NAVIGATION_PATHS } from './navigation-paths.const';

export const NAVIGATION_LINKS: NavigationLink = {
  startingPage: {
    path: NAVIGATION_PATHS.startingPage,
    name: 'Learned stuff',
    icon: 'home',
  },
  todoList: {
    path: NAVIGATION_PATHS.todoList,
    name: 'Todo',
    icon: 'event_note',
  },
};
