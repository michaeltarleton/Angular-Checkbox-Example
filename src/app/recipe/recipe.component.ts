import { Component, OnInit, Output } from '@angular/core';

@Component({
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})

export class RecipeComponent implements OnInit {

  recipe: IRecipe
  allIngredientsSelected: boolean

  constructor() { }

  ngOnInit() {
    this.recipe = RECIPE
  }

  handleIngredientsChanged(allIngredientsSelected: boolean): void {
    this.allIngredientsSelected = allIngredientsSelected
  }

  handleSelectAllChecked(checked: boolean): void {
    this.recipe.ingredients = checked
      ? this.recipe.ingredients.map(i => { i.checked = true; return i })
      : this.recipe.ingredients.map(i => { i.checked = false; return i })
  }
}

export interface IIngredient {
  name: string,
  checked?: boolean
}

export interface IRecipe {
  name: string,
  ingredients: IIngredient[]
}

const RECIPE: IRecipe = {
  name: 'Bread',
  ingredients: [
    { name: 'Yeast' },
    { name: 'Flour' },
    { name: 'Sugar' },
    { name: 'Oil' },
    { name: 'Eggs' }
  ]
}