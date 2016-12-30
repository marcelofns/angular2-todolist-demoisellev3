import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { TodoRoutingModule } from './todo-routing.module';

import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { PopoverModule } from 'ng2-bootstrap/popover';

import { TodoService } from './todo.service';
import { TodoComponent } from './todo.component';


@NgModule({
    imports: [
        SharedModule,
        TodoRoutingModule,
        ConfirmationPopoverModule.forRoot({
            confirmText: 'Sim',
            cancelText: 'Não',
            appendToBody: true
        })
    ],
    declarations: [
        TodoComponent
    ],
    providers: [TodoService],
    exports: []
})
export class TodoModule { }
