import {TestBed} from '@angular/core/testing';
import {ToDoListInterceptor} from './to-do-list.interceptor';

describe('ToDoListInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ToDoListInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ToDoListInterceptor = TestBed.inject(ToDoListInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
