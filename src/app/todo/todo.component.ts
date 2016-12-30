import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective, PopoverDirective } from 'ng2-bootstrap/ng2-bootstrap';

import { NotificationService } from '../shared';
import { TodoService } from './todo.service';
import { Todo } from './todo.model';

@Component({
  selector: 'dml-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']

})
export class TodoComponent implements OnInit {
  todo: Todo;
  todos: Todo[];
  content: string ="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."

  @ViewChild('staticModal') public staticModal: ModalDirective;
  @ViewChild('adiarTemplate') public adiarTemplate: PopoverDirective;

  public itemsPerPage: number = 10;
  public totalItems: number = 0;
  public currentPage: number = 1;


  constructor(private service: TodoService, private notificationService: NotificationService) {
  }


  ngOnInit() {
        this.list();
  }

  pageChanged(event: any): void {
    this.currentPage = event.page;
    this.list();
  }



  list() {
    this.service.list(this.currentPage, this.itemsPerPage).subscribe(
      result => {
        this.totalItems = 20; // backend must send  the total items for proper pagination config
        this.todos = result;

      },
      error => {
        this.notificationService.error('Não foi possível carregar a lista de todos!');
        this.totalItems = 20;
        this.todos = error;
      }
    );
  }


  delete(todo: Todo) {
    this.service.delete(todo).subscribe(
      () => {
        this.todo = null;
        this.staticModal.hide();
        this.list();
      },
      error => {
        this.notificationService.error('Não foi possível remover o usuário!');
      }
    );
  }

  adiar(todo, days) {
    // todo :)
  }

  setStatus(todo, status) {
    
  }

}
