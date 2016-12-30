import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';
import { AuthGuard } from '@demoiselle/security';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'todo',
                data: ['ToDo'],
                //canActivate: [AuthGuard],
                component: TodoComponent
            }
        ])
    ],
    exports: [RouterModule]
})
export class TodoRoutingModule { }