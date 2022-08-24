import { Injectable } from '@angular/core';
import { map, Observable, of, timer } from 'rxjs';
import { Todo } from '@app/app/to-do/domain';
import { adjectives, uniqueNamesGenerator } from 'unique-names-generator';
import { v4 } from 'uuid';
import { appConfig } from '@app/shared/resources';
import { ItemType, TimeParser } from '@app/shared/domain';

@Injectable()
export class ToDoService {
  endpoints = {
    loadTodos: '',
    addToDo: '',
    deleteTodo: '',
    editTodo: '',
  };
  todosMemory: Todo[] = JSON.parse(localStorage.getItem('todosMemory'));
  startedTodos: string[] = JSON.parse(localStorage.getItem('startedTodos'));
  finishedTodos: string[] = JSON.parse(localStorage.getItem('finishedTodos'));
  lastOffset = 0;

  constructor(private timeParser: TimeParser) {}

  generateTodos(): Todo[] {
    const todos: Todo[] = [];
    new Array(15).fill(0).forEach((val, index) => {
      todos.push({
        id: index + 1,
        timeToComplete: '00:01',
        priority: 'high',
        information: {
          canOpen: true,
          name: uniqueNamesGenerator({ dictionaries: [adjectives] }),
          description: 'as',
          itemType: ItemType.todo,
        },
        uuid: v4(),
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
    return of(this.todosMemory?.length);
  }

  startTodo(todo: Todo): Observable<Todo> {
    this.startedTodos = JSON.parse(localStorage.getItem('startedTodos'));
    const startedTodo: Todo = {
      ...todo,
      dateOfStart: this.timeParser.getCurrentParsedTime(),
    };
    localStorage.setItem(
      'todosMemory',
      JSON.stringify(
        this.todosMemory.map((item) =>
          item.uuid === todo.uuid ? startedTodo : item
        )
      )
    );
    localStorage.setItem(
      'startedTodos',
      JSON.stringify(
        this.startedTodos
          ? [...this.startedTodos, startedTodo.uuid]
          : [startedTodo.uuid]
      )
    );
    return of(startedTodo);
  }

  finishTodo(todo: Todo): Observable<Todo> {
    const finishedTodo: Todo = {
      ...todo,
      dateOfStart: null,
    };
    localStorage.setItem(
      'todosMemory',
      JSON.stringify(
        this.todosMemory.map((item) =>
          item.uuid === todo.uuid ? finishedTodo : item
        )
      )
    );
    localStorage.setItem(
      'startedTodos',
      JSON.stringify(this.startedTodos.filter((uuid) => uuid !== todo.uuid))
    );
    this.finishedTodos = JSON.parse(localStorage.getItem('finishedTodos'));
    localStorage.setItem(
      'finishedTodos',
      JSON.stringify(
        this.startedTodos ? [...this.startedTodos, todo.uuid] : [todo.uuid]
      )
    );
    return of(finishedTodo);
  }

  addTodo(todo: Todo): Observable<Todo> {
    const newTodo = { ...todo, id: this.todosMemory.length + 1, uuid: v4() };
    this.todosMemory.push(newTodo);
    localStorage.setItem('todosMemory', JSON.stringify(this.todosMemory));
    return of(newTodo);
    // return this.http.post<Todo>(this.endpoints.addToDo, todo);
  }

  deleteTodos(ids: string[]): Observable<boolean> {
    localStorage.setItem(
      'todosMemory',
      JSON.stringify(
        this.todosMemory.filter((todo) => !ids.includes(todo.uuid))
      )
    );
    return of(true);
    // return this.http.delete<void>(this.endpoints.deleteTodo, {
    //   params: { ids },
    // });
  }

  editTodo(todo: Todo): Observable<Todo> {
    localStorage.setItem(
      'todosMemory',
      JSON.stringify(
        this.todosMemory.map((item) =>
          item.uuid === todo.uuid ? { ...item, ...todo } : item
        )
      )
    );
    return of(todo);
    // return this.http.patch<Todo>(this.endpoints.editTodo, todo);
  }
}
