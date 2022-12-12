import {
  Component,
  OnInit
} from '@angular/core';
import {Observable} from 'rxjs';
import {TodoListService} from './utils';

@Component({
  selector: 'lib-todoList',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public cowList$ : Observable<any> | undefined;

  constructor(private readonly _toDoListService : TodoListService) { }

  ngOnInit() : void {
    this.cowList$ = this._toDoListService.dataList$;
  }
}
