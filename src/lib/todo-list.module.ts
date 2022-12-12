import {
  AsyncPipe,
  NgForOf,
  NgIf
} from '@angular/common';
import {NgModule} from '@angular/core';
import {
  BodyTableListComponent,
  FooterListComponent,
  HeaderListComponent,
  JumbotronComponent
} from './components';
import {TodoListComponent} from './todo-list.component';
import {CowRoutingModule} from './todo-list.routing.module';

@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CowRoutingModule,
    NgForOf,
    NgIf,
    AsyncPipe,
    JumbotronComponent,
    BodyTableListComponent,
    HeaderListComponent,
    FooterListComponent
  ],
  exports: [
    TodoListComponent
  ],
  providers: [

  ]
})
export class TodoListModule {}
