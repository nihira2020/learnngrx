import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CounterComponent } from './component/counter/counter.component';
import { BlogComponent } from './component/blog/blog.component';
import { authGuard } from './Guard/auth.guard';
import { EditblogComponent } from './component/editblog/editblog.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"counter",component:CounterComponent,canActivate:[authGuard]},
  {path:"blog",component:BlogComponent,canActivate:[authGuard]},
  {path:"blog/edit/:id",component:EditblogComponent,canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
