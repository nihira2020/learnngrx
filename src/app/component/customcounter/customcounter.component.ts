import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customincrement } from 'src/app/shared/store/counter.actions';

@Component({
  selector: 'app-customcounter',
  templateUrl: './customcounter.component.html',
  styleUrls: ['./customcounter.component.css']
})
export class CustomcounterComponent {
  constructor(private store: Store<{ counter: { counter: number } }>) {

  }
  counterinput!: number;
  actiontype='add';

  OnIncrement() {
    this.store.dispatch(customincrement({ value: +this.counterinput,action:this.actiontype }));
  }

}
