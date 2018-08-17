import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RecipeComponentComponent } from './recipe/recipe-component/recipe-component.component';
import { IngredientComponentComponent } from './recipe/ingredient-component/ingredient-component.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipeComponentComponent,
    IngredientComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
