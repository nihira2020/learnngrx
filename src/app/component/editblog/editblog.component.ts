import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getrouterinfo } from 'src/app/shared/store/Router/Router.Seletor';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {
  editblogid: any
  constructor(private route: ActivatedRoute, private store: Store) {

  }
  ngOnInit(): void {
    //this.editblogid=this.route.snapshot.paramMap.get('id');
    this.store.select(getrouterinfo).subscribe(item => {
      this.editblogid = item;
    });
  }

}
