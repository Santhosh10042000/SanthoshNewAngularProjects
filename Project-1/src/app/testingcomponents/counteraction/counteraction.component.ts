import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../../Store/Counter.action';

@Component({
  selector: 'app-counteraction',
  templateUrl: './counteraction.component.html',
  styleUrl: './counteraction.component.css'
})
export class CounteractionComponent {
  constructor(private store: Store<{ counter: { counter: number } }>) {

  }
  IsIncrement() {
    this.store.dispatch(increment())
  }
  IsDecrement() {
    this.store.dispatch(decrement())
  }
  IsReset() {
    this.store.dispatch(reset())
  }
}
