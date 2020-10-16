import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';

import { PostsComponent } from '../blogs/posts/posts.component';


@NgModule({
  declarations: [
    UserComponent,
    ProfileComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
