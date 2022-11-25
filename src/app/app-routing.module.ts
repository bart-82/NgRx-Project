import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  {
    path: 'posts',
    loadChildren: () =>
      import('src/app/posts/posts.module').then((x) => x.PostsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'comments',
    loadChildren: () =>
      import('src/app/posts/comments/comments.module').then(
        (x) => x.CommentsModule
      ),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
