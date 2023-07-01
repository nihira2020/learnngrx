import { createReducer,on } from "@ngrx/store";
import { BlogState } from "./Blog.state";
import { loadblog } from "./Blog.actions";

const _blogReducer = createReducer(BlogState,
    on(loadblog, (state) => {
        return {
            ...state
        };
    })


)

export function blogReducer(state: any, action: any) {
    return _blogReducer(state, action);

}