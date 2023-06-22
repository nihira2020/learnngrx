import { Component,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customincrement } from 'src/app/shared/store/counter.actions';
import { CounterModel } from 'src/app/shared/store/counter.model';
import { Subscription,Observable } from 'rxjs'
import { getchannelname } from 'src/app/shared/store/counter.selector';

@Component({
  selector: 'app-customcounter',
  templateUrl: './customcounter.component.html',
  styleUrls: ['./customcounter.component.css']
})
export class CustomcounterComponent implements OnInit {
  constructor(private store: Store<{ counter: CounterModel }>) {

  }
  ngOnInit(): void {
    this.countersubscribe = this.store.select(getchannelname).subscribe(data => {
      this.channelname = data;
      console.log('custom counter');
    });
  }
  counterinput!: number;
  actiontype='add';
  channelname='';
  countersubscribe !: Subscription;

  OnIncrement() {
    this.store.dispatch(customincrement({ value: +this.counterinput,action:this.actiontype }));
  }

}
