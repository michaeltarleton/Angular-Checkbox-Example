import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { IngredientComponent } from './recipe/ingredient/ingredient.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { IngredientListComponent } from './recipe/ingredient/ingredient-list.component';

import {
  MatCardModule,
  MatCheckboxModule,
  MatListModule
} from '@angular/material'


@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    PageNotFoundComponent,
    IngredientComponent,
    IngredientListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatCheckboxModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
