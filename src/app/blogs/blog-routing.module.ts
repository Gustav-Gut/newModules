import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CommentsComponent } from './comments/comments.component';
import { PostsComponent } from './posts/posts.component';


const routes: Routes = [
  {
    path: 'blog', component: BlogComponent,
    children: [
      {
        path: 'posts', component: PostsComponent,
        children: [
          { path: 'comments', component: CommentsComponent },
          { path: '**', redirectTo: 'comments', pathMatch: 'full' }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
