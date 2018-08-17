import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RecipeComponentComponent } from './recipe/recipe-component/recipe-component.component';
import { IndridientComponentComponent } from './recipe/indridient-component/indridient-component.component';
import { IngridientComponentComponent } from './recipe/ingridient-component/ingridient-component.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipeComponentComponent,
    IndridientComponentComponent,
    IngridientComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
