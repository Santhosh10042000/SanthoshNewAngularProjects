import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounteractionComponent } from './counteraction.component';

describe('CounteractionComponent', () => {
  let component: CounteractionComponent;
  let fixture: ComponentFixture<CounteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounteractionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
