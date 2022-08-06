import { Injectable } from '@angular/core';
import { map, Observable, of, timer } from 'rxjs';
import { Todo } from '@app/app/to-do/domain';
import { adjectives, uniqueNamesGenerator } from 'unique-names-generator';
import { v4 } from 'uuid';
import { appConfig } from '@app/shared/resources';
import { TimeParser } from '@app/shared/domain';

@Injectable()
export class ToDoService {
  endpoints = {
    loadTodos: '',
    addToDo: '',
    deleteTodo: '',
    editTodo: '',
  };
  todosMemory: Todo[] = JSON.parse(localStorage.getItem('todosMemory'));
  lastOffset = 0;

  constructor(private timeParser: TimeParser) {}

  generateTodos(): Todo[] {
    const todos: Todo[] = [];
    new Array(100).fill(0).forEach((val, index) => {
      todos.push({
        id: index + 1,
        information: {
          name: uniqueNamesGenerator({ dictionaries: [adjectives] }),
          description: 'as',
        },
        priority: 'high',
        timeToComplete: '00:01',
        uuid: v4(),
        inProgress: false,
      });
    });
    return todos;
  }

  loadTodos(offset: number): Observable<Todo[]> {
    return timer(1000).pipe(
      map(() => {
        if (
          offset === appConfig.itemsPerLoad &&
          this.lastOffset !== offset &&
          !this.todosMemory
        ) {
          this.todosMemory = this.generateTodos();
          localStorage.setItem('todosMemory', JSON.stringify(this.todosMemory));
        }
        const todos = this.todosMemory.slice(
          this.lastOffset,
          this.lastOffset + offset
        );
        this.lastOffset += offset;
        return todos;
      })
    );

    // return this.http.get<Todo[]>(this.endpoints.loadTodos, {
    //   params: { offset },
    // });
  }

  loadTodosQuantity(): Observable<number> {
    return of(this.todosMemory.length);
  }

  startTodo(todo: Todo): Observable<boolean> {
    const startedTodos: Todo[] = JSON.parse(
      localStorage.getItem('startedTodos')
    );
    const newStartedTodo: Todo = {
      ...todo,
      inProgress: true,
      information: {
        ...todo.information,
        dateOfStart: this.timeParser.getCurrentParsedTime(),
      },
    };
    localStorage.setItem(
      'startedTodos',
      JSON.stringify(
        startedTodos
          ? [...startedTodos, newStartedTodo]
          : [{ ...newStartedTodo }]
      )
    );
    return of(true);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return of({ ...todo, id: this.todosMemory.length + 1, uuid: v4() });
    // return this.http.post<Todo>(this.endpoints.addToDo, todo);
  }

  deleteTodos(ids: string[]): Observable<boolean> {
    return of(true);
    // return this.http.delete<void>(this.endpoints.deleteTodo, {
    //   params: { ids },
    // });
  }

  editTodo(todo: Todo): Observable<Todo> {
    return of(todo);
    // return this.http.patch<Todo>(this.endpoints.editTodo, todo);
  }
}
