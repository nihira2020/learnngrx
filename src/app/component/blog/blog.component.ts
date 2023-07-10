import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { BlogModel } from 'src/app/shared/store/Blog/Blog.model';
import { getblog } from 'src/app/shared/store/Blog/Blog.selectors';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.Model';
import { AddblogComponent } from '../addblog/addblog.component';
import { deleteblog } from 'src/app/shared/store/Blog/Blog.actions';

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
    this.OpenPopup(0,'Add Blog');
  }

  OpenPopup(id:any,title:any,isedit=false) {
    this.dialog.open(AddblogComponent, {
      width: '40%',
      data:{
        id:id,
        title:title,
        isedit:isedit
      }
    })
  }

  EditBlog(id:any){
   this.OpenPopup(id,'Edit Blog',true);
  }

  RemoveBlog(id:any){
    if(confirm("Are you sure want to remove?")){
      this.store.dispatch(deleteblog({id:id}));
    }
  }

}
