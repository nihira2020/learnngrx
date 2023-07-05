import { BlogComponent } from "src/app/component/blog/blog.component";
import { CounterModel } from "../counter.model";
import { Blogs } from "../Blog/Blog.model";

export interface AppStateModel{
    counter:CounterModel,
    blog:Blogs
}