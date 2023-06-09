import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.css']
})
export class CounterdisplayComponent implements OnInit {
  constructor(private store: Store<{ counter: { counter: number } }>) {

  }
  counterdisplay!: number;
  ngOnInit(): void {
    this.store.select('counter').subscribe(data => {
      this.counterdisplay = data.counter;
    })
  }

}
