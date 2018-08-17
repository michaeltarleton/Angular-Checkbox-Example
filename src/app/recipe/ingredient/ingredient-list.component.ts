import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IRecipe, IIngredient } from '../recipe.component';

@Component({
  selector: 'ingredient-list',
  template: `
    <ul>
      <ingredient *ngFor="let ingredient of recipe.ingredients" [ingredient]="ingredient" (ingredientChanged)="handleIngredientChanged($event)"></ingredient>
    </ul>
  `,
  styles: []
})
export class IngredientListComponent implements OnInit {

  @Input() recipe: IRecipe
  @Output() ingredientsChanged: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit() {
  }

  handleIngredientChanged(){
    console.log('handleIngredientChanged')
    this.ingredientsChanged.emit(this.recipe.ingredients.every(i => i.checked))
  }

}
