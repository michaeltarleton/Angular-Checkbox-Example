import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-component',
  template: `
    <p>
      recipe-component works!
    </p>
  `,
  styles: []
})
export class RecipeComponentComponent implements OnInit {
  recipe: IRecipe

  constructor() { }

  ngOnInit() {
    this.recipe = RECIPE
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