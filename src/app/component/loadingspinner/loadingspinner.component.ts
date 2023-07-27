import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getspinnerstate } from 'src/app/shared/store/Global/App.Selectors';

@Component({
  selector: 'app-loadingspinner',
  templateUrl: './loadingspinner.component.html',
  styleUrls: ['./loadingspinner.component.css']
})
export class LoadingspinnerComponent implements OnInit {

  isloaded = false;
  constructor(private store: Store) {

  }
  ngOnInit(): void {
    this.store.select(getspinnerstate).subscribe(res => {
      this.isloaded = res;
    });
  }

}
