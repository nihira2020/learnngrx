import { blogReducer } from "../Blog/Blog.reducers";
import { counterReducer } from "../counter.reducer";
import { AppReducer } from "./App.Reducer";
import {routerReducer} from '@ngrx/router-store'

export const AppState={
    counter:counterReducer,
    blog:blogReducer,
    app:AppReducer,
    router:routerReducer
}