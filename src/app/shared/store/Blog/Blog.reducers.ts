import { createReducer,on } from "@ngrx/store";
import { BlogState } from "./Blog.state";
import { addblog, deleteblog, loadblog, updateblog } from "./Blog.actions";
import { BlogModel } from "./Blog.model";

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
    }),
    on(updateblog,(state,action)=>{
        const _blog={...action.bloginput};
        const updatedblog=state.bloglist.map(blog=>{
          return _blog.id===blog.id?_blog:blog;
        });
        return{
            ...state,
            bloglist:updatedblog
        }
    }),
    on(deleteblog,(state,action)=>{
        const updatedblog=state.bloglist.filter((data:BlogModel)=>{
           return data.id !==action.id
        });
        return{
            ...state,
            bloglist:updatedblog
        }
    })


)

export function blogReducer(state: any, action: any) {
    return _blogReducer(state, action);

}