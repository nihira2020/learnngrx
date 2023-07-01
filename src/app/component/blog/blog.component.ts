import { Component,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BlogModel } from 'src/app/shared/store/Blog/Blog.model';
import { getblog } from 'src/app/shared/store/Blog/Blog.selectors';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.Model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  constructor(private store:Store<AppStateModel>){

  }

  bloglist !:BlogModel[];

  ngOnInit(): void {
    this.store.select(getblog).subscribe(item=>{
    this.bloglist=item;
    console.log(this.bloglist);
    });
  }

}
