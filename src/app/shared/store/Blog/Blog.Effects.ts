import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { MasterService } from "../../master.service"
import { LOAD_BLOG, addblog, addblogsuccess, loadblogfail, loadblogsuccess } from "./Blog.actions"
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
}