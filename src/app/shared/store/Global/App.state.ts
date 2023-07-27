import { blogReducer } from "../Blog/Blog.reducers";
import { counterReducer } from "../counter.reducer";
import { AppReducer } from "./App.Reducer";

export const AppState={
    counter:counterReducer,
    blog:blogReducer,
    app:AppReducer
}