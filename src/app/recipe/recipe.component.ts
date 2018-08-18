import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRecipe } from './common';

@Component({
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})

export class RecipeComponent implements OnInit {

  recipe: IRecipe
  allIngredientsSelected: boolean

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipe = this.route.snapshot.data['recipe'];
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
