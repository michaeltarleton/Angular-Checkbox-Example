import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './recipe-component.component.html',
  styles: []
})
export class RecipeComponentComponent implements OnInit {
  recipe: IRecipe

  constructor() { }

  ngOnInit() {
    this.recipe = RECIPE
  }

  onIngredientChange(): void {
  }
}

export interface IIngredients {
  name: string,
  checked: boolean
}

export interface IRecipe {
  name: string,
  ingredients: IIngredients[]
}

const RECIPE: IRecipe = {
  name: 'Bread',
  ingredients: [
    {
      name: 'Yeast',
      checked: false
    },
    {
      name: 'Flour',
      checked: false
    }
  ]
}