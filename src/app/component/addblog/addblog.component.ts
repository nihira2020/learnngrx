import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addblog } from 'src/app/shared/store/Blog/Blog.actions';
import { BlogModel } from 'src/app/shared/store/Blog/Blog.model';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.Model';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent {
  constructor(private dialogref:MatDialogRef<AddblogComponent>,private builder:FormBuilder,
    private store:Store<AppStateModel>){

  }

  closepopup(){
     this.dialogref.close();
  }

  blogform=this.builder.group({
    id:this.builder.control(0),
    title:this.builder.control('',Validators.required),
    description:this.builder.control('',Validators.required)
  })

  SaveBlogs(){
    if(this.blogform.valid){
      const _bloginput:BlogModel={
       id:0,
       title:this.blogform.value.title as string,
       description:this.blogform.value.description as string
      }
      this.store.dispatch(addblog({bloginput:_bloginput}))
      this.closepopup();
    }
  }

}
