import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import {TodoListModule} from './todo-list.module';

@NgModule({})
export class CoreToDoListModule {
  constructor(@Optional() @SkipSelf() parent : CoreToDoListModule) {
    if(parent) {
      throw new Error('Parent {CORE' +
        ' ToDo List MODULE } is' +
        ' loaded');
    }
  }

  static forRoot() : ModuleWithProviders<TodoListModule> {
    return {
      ngModule: TodoListModule
    };
  }
}
