import {TestBed} from '@angular/core/testing';
import {ToDoTriggerResolver} from './to-do-trigger.resolver';

describe('ToDoTriggerResolver', () => {
  let resolver: ToDoTriggerResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ToDoTriggerResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
