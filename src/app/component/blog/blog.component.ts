import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { BlogModel } from 'src/app/shared/store/Blog/Blog.model';
import { getblog } from 'src/app/shared/store/Blog/Blog.selectors';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.Model';
import { AddblogComponent } from '../addblog/addblog.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  constructor(private store: Store<AppStateModel>, private dialog: MatDialog) {

  }

  bloglist !: BlogModel[];

  ngOnInit(): void {
    this.store.select(getblog).subscribe(item => {
      this.bloglist = item;
      console.log(this.bloglist);
    });
  }

  AddBlog() {
    this.OpenPopup();
  }

  OpenPopup() {
    this.dialog.open(AddblogComponent, {
      width: '40%'
    })
  }

}
