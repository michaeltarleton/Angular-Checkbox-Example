import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IRecipe } from '../common/recipe.interfaces';

@Component({
  selector: 'ingredient-list',
  template: `
    <mat-list>
      <mat-divider></mat-divider>
      <ingredient *ngFor="let ingredient of recipe.ingredients" [ingredient]="ingredient" (ingredientChanged)="handleIngredientChanged($event)"></ingredient>
    </mat-list>
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
