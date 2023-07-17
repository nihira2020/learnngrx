import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { MasterService } from "../../master.service"
import { LOAD_BLOG, addblog, addblogsuccess, deleteblog, deleteblogsuccess, loadblogfail, loadblogsuccess, updateblog, updateblogsuccess } from "./Blog.actions"
import { EMPTY, catchError, exhaustMap, map, mergeMap, of } from "rxjs"
import { BlogModel } from "./Blog.model"

@Injectable()
export class BlogEffects {


    constructor(private action$: Actions, private service: MasterService) {

    }
    _lodblog = createEffect(() =>
        this.action$
            .pipe(
                ofType(LOAD_BLOG),
                exhaustMap((action) => {
                    return this.service.GetAllBlogs().pipe(
                        map((data) => {
                            return loadblogsuccess({ bloglist: data });
                        }),
                        catchError((_error) => of(loadblogfail({ Errortext: _error })))
                    )
                })
            )
    );

    _AddBlog=createEffect(()=>
     this.action$.pipe(
            ofType(addblog),
            exhaustMap(action=>{
                return this.service.CreateBlog(action.bloginput).pipe(
                    map((data)=>{
                       return addblogsuccess({bloginput:data as BlogModel})
                    }),
                    catchError((_error) => of(loadblogfail({ Errortext: _error })))
                )
            })
        )
    );

    _UpdateBlog=createEffect(()=>
    this.action$.pipe(
           ofType(updateblog),
           exhaustMap(action=>{
               return this.service.UpdateBlog(action.bloginput).pipe(
                   map(()=>{
                      return updateblogsuccess({bloginput:action.bloginput})
                   }),
                   catchError((_error) => of(loadblogfail({ Errortext: _error })))
               )
           })
       )
   );

   _DeleteBlog=createEffect(()=>
    this.action$.pipe(
           ofType(deleteblog),
           exhaustMap(action=>{
               return this.service.DeleteBlog(action.id).pipe(
                   map(()=>{
                      return deleteblogsuccess({id:action.id})
                   }),
                   catchError((_error) => of(loadblogfail({ Errortext: _error })))
               )
           })
       )
   );
}