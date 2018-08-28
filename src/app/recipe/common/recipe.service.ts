import { Injectable } from '@angular/core';
import { IRecipe, IIngredient } from './recipe.interfaces';
import { Observable ,  of } from 'rxjs';

@Injectable()
export class RecipeService {

  private RECIPE: IRecipe = {
    name: 'Delicious Bread',
    ingredients: [
      { name: 'Yeast' },
      { name: 'Flour' },
      { name: 'Sugar' },
      { name: 'Oil' },
      { name: 'Eggs' }
    ]
  }

  constructor() { }

  getRecipe(): Observable<IRecipe> {
    return of(this.RECIPE);
  }

  addIngredient(ingredient:IIngredient): void {
    this.RECIPE.ingredients.push(ingredient);
  }

}

