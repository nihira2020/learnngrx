import { createReducer,on } from "@ngrx/store";
import { BlogState } from "./Blog.state";
import { addblog, loadblog } from "./Blog.actions";

const _blogReducer = createReducer(BlogState,
    on(loadblog, (state) => {
        return {
            ...state
        };
    }),
    on(addblog,(state,action)=>{
        const _blog={...action.bloginput};
        _blog.id=state.bloglist.length+1;
        return{
            ...state,
            bloglist:[...state.bloglist,_blog]
        }
    })


)

export function blogReducer(state: any, action: any) {
    return _blogReducer(state, action);

}