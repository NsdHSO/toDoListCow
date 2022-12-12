import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { TodoListComponent } from './todo-list.component';

const routes: Routes = [
  {
    path:'',
    component: TodoListComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/toDoList'
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CowRoutingModule {
}
