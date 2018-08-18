import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { IRecipe } from "./recipe.interfaces";
import { Observable } from "rxjs";
import { RecipeService } from "./recipe.service";
import { Injectable } from "@angular/core";

@Injectable()
export class RecipeResolver implements Resolve<IRecipe> {

    constructor(private recipeService: RecipeService) {}

    resolve(): Observable<IRecipe> {
        return this.recipeService.getRecipe();
    }
}
