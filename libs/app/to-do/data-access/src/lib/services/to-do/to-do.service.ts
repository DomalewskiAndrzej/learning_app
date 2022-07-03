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
  };

  constructor(private http: HttpClient) {}

  loadTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.endpoints.loadTodos);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.endpoints.addToDo, todo);
  }

  deleteTodo(id: string): Observable<void> {
    return this.http.delete<void>(this.endpoints.deleteTodo, {
      params: { id },
    });
  }
}
