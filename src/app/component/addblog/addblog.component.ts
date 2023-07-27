import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addblog, updateblog } from 'src/app/shared/store/Blog/Blog.actions';
import { BlogModel } from 'src/app/shared/store/Blog/Blog.model';
import { getblogbyid } from 'src/app/shared/store/Blog/Blog.selectors';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.Model';
import { loadspinner } from 'src/app/shared/store/Global/App.Action';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {
  pagetitle = '';
  editblogid = 0;
  editdata!: BlogModel;

  constructor(private dialogref: MatDialogRef<AddblogComponent>, private builder: FormBuilder,
    private store: Store<AppStateModel>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  ngOnInit(): void {
    this.pagetitle = this.data.title;
    if (this.data.isedit) {
      this.editblogid = this.data.id;
      this.store.select(getblogbyid(this.editblogid)).subscribe(_data => {
        this.editdata = _data;
        this.blogform.setValue({id:this.editdata.id,title:this.editdata.title,description:this.editdata.description});
      });
    }
  }

  closepopup() {
    this.dialogref.close();
  }

  blogform = this.builder.group({
    id: this.builder.control(0),
    title: this.builder.control('', Validators.required),
    description: this.builder.control('', Validators.required)
  })

  SaveBlogs() {
    if (this.blogform.valid) {
      const _bloginput: BlogModel = {
        id: 0,
        title: this.blogform.value.title as string,
        description: this.blogform.value.description as string
      }

      this.store.dispatch(loadspinner({ isloaded: true }));
      setTimeout(() => {
        if(this.data.isedit){
          _bloginput.id=this.blogform.value.id as number;
          this.store.dispatch(updateblog({ bloginput: _bloginput }))
        }else{
        this.store.dispatch(addblog({ bloginput: _bloginput }))
        }
        this.closepopup();
      }, 2000);

     
    }
  }

}
