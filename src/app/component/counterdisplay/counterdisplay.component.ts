import { Component, OnInit,OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterModel } from 'src/app/shared/store/counter.model';
import { Subscription,Observable } from 'rxjs'
import { getcounter } from 'src/app/shared/store/counter.selector';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.Model';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.css']
})
export class CounterdisplayComponent implements OnInit,OnDestroy {
  constructor(private store: Store<AppStateModel>) {

  }
  
  counterdisplay!: number;
  channelname = '';
  countersubscribe !: Subscription;
  counter$ !:Observable<CounterModel>;
  ngOnInit(): void {
    this.countersubscribe = this.store.select(getcounter).subscribe(data => {
      this.counterdisplay = data;
      console.log('counter display');
    });

   // this.counter$=this.store.select('counter');
  }

  ngOnDestroy(): void {
    if(this.countersubscribe){
      this.countersubscribe.unsubscribe();
    }
  }

}
