import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {
  Observable,
  of
} from 'rxjs';
import {toDoListData} from '../mocks';

@Injectable()
export class ToDoListInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request : HttpRequest<unknown>,
    next : HttpHandler) : Observable<HttpEvent<unknown>> {
    console.log('test')
    if(request.method === 'GET' && request.url === 'http://localhost:3001/cow/to-do-list') {
      return of(new HttpResponse({
        status: 200,
        body: toDoListData
      }));
    }
    return next.handle(request);
  }
}
