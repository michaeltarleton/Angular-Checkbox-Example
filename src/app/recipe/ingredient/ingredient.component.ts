import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IIngredient } from '../recipe.component';

@Component({
  selector: 'ingredient',
  template: `
    <mat-list-item>
      <mat-divider></mat-divider>
      <mat-checkbox type="checkbox" (change)="handleCheck($event.checked)" [checked]="ingredient.checked">{{ingredient.name}}</mat-checkbox>
    </mat-list-item>
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
    console.log('handleCheck', 'checked', checked)
    this.ingredient.checked = checked
    this.ingredientChanged.emit(checked)
  }
}
