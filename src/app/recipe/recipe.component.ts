import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRecipe } from './common';

@Component({
  template: `
    <div>
      <mat-card>
          <mat-card-title><h1>Recipe</h1></mat-card-title>

          <mat-card-content>

            <h2>Name</h2> {{recipe.name}}

            <div class="ingredients-header">
              <h2>Ingredients</h2>
              <mat-checkbox id="selectAll" [checked]="allIngredientsSelected" (change)="handleSelectAllChecked($event.checked)">select all</mat-checkbox>
            </div>
            <ingredient-list [recipe]="recipe" (ingredientsChanged)="handleIngredientsChanged($event)"></ingredient-list>

            <mat-button></mat-button>
            </mat-card-content>
      </mat-card>
    </div>
  `,
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
