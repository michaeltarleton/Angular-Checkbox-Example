import { Component, OnInit, Input } from '@angular/core';
import { IRecipe } from '../recipe.component';

@Component({
  selector: 'ingredient-list',
  template: `
    <ul>
      <ingredient *ngFor="recipe.ingredients"></ingredient>
    </ul>
  `,
  styles: []
})
export class IngredientListComponent implements OnInit {

  @Input() recipe: IRecipe

  constructor() { }

  ngOnInit() {
  }

}
