import { createAction, props } from "@ngrx/store";
import { BlogModel } from "./Blog.model";

export const LOAD_BLOG_SUCCESS='[blog page] load blog success';
export const LOAD_BLOG_FAIL='[blog page] load blog fail';
export const LOAD_BLOG='[blog page] load blog';
export const ADD_BLOG_SUCCESS='[blog page] add blog success';
export const ADD_BLOG='[blog page] add blog';
export const UPDATE_BLOG='[blog page] update blog';
export const UPDATE_BLOG_SUCCESS='[blog page] update blog success';
export const DELETE_BLOG='[blog page] delete blog';
export const DELETE_BLOG_SUCCESS='[blog page] delete blog success';


export const loadblog=createAction(LOAD_BLOG);

export const loadblogsuccess=createAction(LOAD_BLOG_SUCCESS,props<{bloglist:BlogModel[]}>())

export const loadblogfail=createAction(LOAD_BLOG_FAIL,props<{Errortext:any}>())

export const addblog=createAction(ADD_BLOG,props<{bloginput:BlogModel}>());

export const addblogsuccess=createAction(ADD_BLOG_SUCCESS,props<{bloginput:BlogModel}>());

export const updateblog=createAction(UPDATE_BLOG,props<{bloginput:BlogModel}>());

export const updateblogsuccess=createAction(UPDATE_BLOG_SUCCESS,props<{bloginput:BlogModel}>());

export const deleteblog=createAction(DELETE_BLOG,props<{id:number}>());

export const deleteblogsuccess=createAction(DELETE_BLOG_SUCCESS,props<{id:number}>());

