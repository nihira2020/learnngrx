import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { MasterService } from "../../master.service"
import { LOAD_BLOG, loadblogsuccess } from "./Blog.actions"
import { EMPTY, catchError, exhaustMap, map } from "rxjs"

@Injectable()
export class BlogEffects {

    
    constructor(private action$: Actions, private service: MasterService) {

    }
    _blog = createEffect(() =>
    this.action$
        .pipe(
            ofType(LOAD_BLOG),
            exhaustMap((action) => {
                return this.service.GetAllBlogs().pipe(
                    map((data) => {
                        return loadblogsuccess({bloglist:data});
                    }),
                    catchError(() => EMPTY)
                )
            })
        )
);

}