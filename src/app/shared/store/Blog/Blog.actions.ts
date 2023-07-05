import { createAction, props } from "@ngrx/store";
import { BlogModel } from "./Blog.model";

export const loadblog=createAction('loadblog');

export const addblog=createAction('addblog',props<{bloginput:BlogModel}>());