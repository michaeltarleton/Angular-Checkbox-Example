export interface IRecipe {
    name: string,
    ingredients: IIngredient[]
}

export interface IIngredient {
    name: string,
    checked?: boolean
}