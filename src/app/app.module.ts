import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';

import {
  MatCardModule,
  MatCheckboxModule,
  MatListModule
} from '@angular/material'
import { RecipeService } from './recipe/common/recipe.service';
import { RecipeComponent, IngredientComponent, IngredientListComponent } from './recipe';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    RecipeComponent,
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
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
