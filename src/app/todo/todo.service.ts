
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {

  constructor(private http: Http) {

  }
  list(currentPage: number, itemsPerPage: number) {

    let start = itemsPerPage * (currentPage - 1);
    return this.http.get('~main/todo')
      .map(
      res => res.json()

      )
      .catch(function (error) {

        return Observable.throw(<Todo[]>[
          {
            id: 1,
            nome: 'todo 1 catch'
          },
          {
            id: 2,
            nome: 'todo 2 catch'
          }
        ]);
      });
  }

  get(id: number) {
    return this.http.get('~main/todo/' + id)
      .map(
      res => <Todo>res.json()

      );
  }

  create(usuario: Todo) {
    return this.http.post('~main/todo', usuario);
  }

  update(usuario: Todo) {
    return this.http.put('~main/todo', usuario);
  }

  delete(usuario: Todo) {
    return this.http.delete('~main/todo/' + usuario.id);
  }
}
