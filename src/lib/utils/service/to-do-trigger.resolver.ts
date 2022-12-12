import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import {
  Observable,
  of
} from 'rxjs';
import {TodoListService} from './todo-list.service';

@Injectable({
  providedIn: 'root'
})
export class ToDoTriggerResolver implements Resolve<boolean> {
  constructor(private _toDoListService : TodoListService) {}

  resolve(
    route : ActivatedRouteSnapshot,
    state : RouterStateSnapshot) : Observable<boolean> {
    this._toDoListService.retrieveToDoList();
    return of(true);
  }
}
