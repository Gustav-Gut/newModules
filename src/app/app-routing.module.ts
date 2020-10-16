import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './blogs/comments/comments.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { Componente1Component } from './components/componente1/componente1.component';
import { Componente2Component } from './components/componente2/componente2.component';


const routes: Routes = [
  {path:'comp1', component:Componente1Component},
  {path:'comp2', component:Componente2Component},
  {path:'comments', component:CommentsComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
