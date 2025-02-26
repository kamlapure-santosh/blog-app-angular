// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { MyBlogPostsComponent } from './components/my-blog-posts/my-blog-posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CreateBlogPostComponent } from './components/create-blog-post/create-blog-post.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'blog-posts',
    component: BlogPostsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'my-blog-posts',
    component: MyBlogPostsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'blog-posts/:postId/comments',
    component: CommentsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-blog-post',
    component: CreateBlogPostComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'blog-posts/:postId/create-comment',
    component: CreateCommentComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: '/blog-posts', pathMatch: 'full' },
  { path: '**', redirectTo: '/blog-posts' },
];
