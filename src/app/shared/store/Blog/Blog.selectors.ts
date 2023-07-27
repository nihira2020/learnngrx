import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BlogModel, Blogs } from "./Blog.model";

const getblogstate=createFeatureSelector<Blogs>('blog');

export const getblog=createSelector(getblogstate,(state)=>{
    return state.bloglist
});

export const getblogbyid=(blogid:number)=>createSelector(getblogstate,(state)=>{
    return state.bloglist.find((blog:BlogModel)=>blog.id===blogid) as BlogModel;
})

export const getbloginfo=createSelector(getblogstate,(state)=>{
    return state
});

// export const getspinnerstate=createSelector(getblogstate,(state)=>{
//     return state.IsLoaded;
// });