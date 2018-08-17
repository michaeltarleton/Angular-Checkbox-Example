import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RecipeComponentComponent } from './recipe/recipe.component';
import { IngredientComponentComponent } from './recipe/ingredient/ingredient.component';
import { PageNotFoundComponentComponent } from './page-not-found-component.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipeComponentComponent,
    IngredientComponentComponent,
    PageNotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
