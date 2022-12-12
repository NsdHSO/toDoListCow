import {TestBed} from '@angular/core/testing';
import {ToDoListApiService} from './to-do-list-api.service';

describe('ToDoListApiService', () => {
  let service: ToDoListApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoListApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
