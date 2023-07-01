import { blogReducer } from "../Blog/Blog.reducers";
import { counterReducer } from "../counter.reducer";

export const AppState={
    counter:counterReducer,
    blog:blogReducer
}