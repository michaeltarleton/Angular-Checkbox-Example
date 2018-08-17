import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IIngredient } from '../recipe.component';

@Component({
  selector: 'ingredient',
  template: `
    <li>
      <input type="checkbox" (change)="handleCheck($event.target.checked)" [checked]="ingredient.checked" />
      <label>{{ingredient.name}}</label>
    </li>
  `,
  styles: []
})
export class IngredientComponent implements OnInit {

  @Input() ingredient: IIngredient
  @Output() ingredientChanged: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit() {
  }

  handleCheck(checked: boolean){
    this.ingredient.checked = checked
    this.ingredientChanged.emit(checked)
  }
}
