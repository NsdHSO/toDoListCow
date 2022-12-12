import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTableListComponent } from './body-table-list.component';

describe('BodyTableListComponent', () => {
  let component: BodyTableListComponent;
  let fixture: ComponentFixture<BodyTableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BodyTableListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
