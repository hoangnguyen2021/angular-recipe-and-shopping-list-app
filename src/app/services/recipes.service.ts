import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
    providedIn: 'root',
})
export class RecipesService {
    recipes: Recipe[] = [
        new Recipe(
            'Recipe 1',
            'Description 1',
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [
                new Ingredient('Apples', 3),
                new Ingredient('Sugar', 2)
            ]),
        new Recipe(
            'Recipe 2',
            'Description 2',
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [
                new Ingredient('Beans', 2),
                new Ingredient('Corn', 4),
                new Ingredient('Milk', 1)
            ])
    ];
    selectedRecipe: Recipe;
    onRecipeSelect: EventEmitter<Recipe> = new EventEmitter<Recipe>();

    setSelectedRecipe(id: number) {
        this.selectedRecipe = this.recipes.find(recipe => recipe.id === id);
        this.onRecipeSelect.emit();
    }

    getRecipeById(id: number) {
        return this.recipes.find((recipe: Recipe) => {
            return recipe.id === id;
        });
    }
}