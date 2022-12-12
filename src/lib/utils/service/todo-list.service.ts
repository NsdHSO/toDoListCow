import {Injectable} from '@angular/core';
import {
  BehaviorSubject,
  tap
} from 'rxjs';
import {ToDoListApiService} from './to-do-list-api.service';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private _dataListCowSubject = new BehaviorSubject<any>(
    []);
  dataList$ = this._dataListCowSubject.asObservable();

  constructor(private readonly _toDoCowApiService : ToDoListApiService) { }

  retrieveToDoList() : void {
    this._toDoCowApiService.getToDoCow()
      .pipe(tap(
        data => this._dataListCowSubject.next(
          data)
      ))
      .subscribe();
  }
}
