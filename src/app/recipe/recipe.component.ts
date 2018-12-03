import {
  Component,
  OnInit,
  Output,
  ApplicationRef,
  ChangeDetectorRef,
} from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { IRecipe } from './common'

@Component({
  template: `
    <div>
      <mat-card>
        <mat-card-title>
          <div>
            <h1>Recipe</h1>
            <div class="favorite-container">
              <button
                mat-icon-button
                [color]="favoriteColor"
                (click)="isFavorite = !isFavorite"
              >
                <mat-icon aria-label="Example icon-button with a heart icon"
                  >favorite</mat-icon
                >
              </button>
              <span *ngIf="isFavorite" [style.color]="'red'">I love it!</span>
            </div>
          </div>
        </mat-card-title>

        <mat-card-content>
          <h2>Name</h2>
          {{ recipe.name }}

          <div class="ingredients-header">
            <h2>Ingredients</h2>
            <mat-checkbox
              id="selectAll"
              [checked]="allIngredientsSelected"
              (change)="handleSelectAllChecked($event.checked)"
              >select all</mat-checkbox
            >
          </div>

          <ingredient-list
            [recipe]="recipe"
            (ingredientsChanged)="handleIngredientsChanged($event)"
          ></ingredient-list>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
  recipe: IRecipe
  allIngredientsSelected = false
  isFavorite: boolean = false

  constructor(
    private route: ActivatedRoute,
    private appRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.recipe = this.route.snapshot.data['recipe']
  }

  handleIngredientsChanged(allIngredientsSelected: boolean): void {
    this.allIngredientsSelected = allIngredientsSelected
    this.appRef.markForCheck()
    console.log(
      'handleIngredientsChanged',
      allIngredientsSelected,
      'this.allIngredientsSelected',
      this.allIngredientsSelected
    )
  }

  handleSelectAllChecked(checked: boolean): void {
    this.recipe.ingredients = checked
      ? this.recipe.ingredients.map(i => {
          i.checked = true
          return i
        })
      : this.recipe.ingredients.map(i => {
          i.checked = false
          return i
        })
  }

  get favoriteColor(): string {
    if (this.isFavorite) return 'warn'
    return 'disabled'
  }
}
