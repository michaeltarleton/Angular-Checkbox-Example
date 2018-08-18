import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component'
import { RecipeComponent, RecipeResolver } from './recipe'

const routes: Routes = [
  { path: '', component: RecipeComponent, resolve: {recipe: RecipeResolver} },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RecipeResolver]
})

export class AppRoutingModule { }
