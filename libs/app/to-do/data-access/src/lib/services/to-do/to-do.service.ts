import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '@app/app/to-do/domain';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoService {
  endpoints = {
    loadTodos: '',
    addToDo: '',
    deleteTodo: '',
    editTodo: '',
  };

  constructor(private http: HttpClient) {}

  loadTodos(offset: number): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.endpoints.loadTodos, {
      params: { offset },
    });
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.endpoints.addToDo, todo);
  }

  deleteTodos(ids: string[]): Observable<void> {
    return this.http.delete<void>(this.endpoints.deleteTodo, {
      params: { ids },
    });
  }

  editTodo(todo: Todo): Observable<Todo> {
    return this.http.patch<Todo>(this.endpoints.editTodo, todo);
  }
}
