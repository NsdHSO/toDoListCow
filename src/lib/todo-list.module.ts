import { NgModule } from '@angular/core';
import { TodoListComponent } from './todo-list.component';
import {CowRoutingModule} from './todo-list.routing.module';



@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CowRoutingModule
  ],
  exports: [
    TodoListComponent
  ]
})
export class TodoListModule { }
