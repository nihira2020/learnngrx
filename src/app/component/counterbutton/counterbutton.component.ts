import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.Model';
import { changechannelname, decrement, increment, reset } from 'src/app/shared/store/counter.actions';
import { CounterModel } from 'src/app/shared/store/counter.model';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.css']
})
export class CounterbuttonComponent {
  constructor(private store:Store<AppStateModel>){

  }

  OnIncrement(){
    this.store.dispatch(increment());

  }
  OnDecrement(){
    this.store.dispatch(decrement());
  }
  OnReset(){
    this.store.dispatch(reset());
  }

  OnRename(){
    this.store.dispatch(changechannelname({channel:'Welcome to Nihira Techiees'}))
  }

}
