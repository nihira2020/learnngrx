import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BlogModel, Blogs } from "./Blog.model";

const getblogstate=createFeatureSelector<Blogs>('blog');

export const getblog=createSelector(getblogstate,(state)=>{
    return state.bloglist
})