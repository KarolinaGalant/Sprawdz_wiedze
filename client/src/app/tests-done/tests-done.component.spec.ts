import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsDoneComponent } from './tests-done.component';

describe('TestsDoneComponent', () => {
  let component: TestsDoneComponent;
  let fixture: ComponentFixture<TestsDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestsDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
