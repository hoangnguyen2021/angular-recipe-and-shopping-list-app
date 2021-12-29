import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from "../models/ingredient.model";

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Bananas', 10),
      ];
    selectedIngredient: Ingredient;
    onChange: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();

    addIngredient(...newIngredients: Ingredient[]): void {
      newIngredients.forEach((newIngredient: Ingredient) => {
        let foundIngredient: Ingredient = this.ingredients.find((ingredient: Ingredient) => {
          return ingredient.name === newIngredient.name;
        });
        if (foundIngredient) {
          foundIngredient.addAmount(newIngredient.amount);
        } else {
          this.ingredients.push(newIngredient.clone());
        }
      });
      this.onChange.emit(this.ingredients);
    }

    deleteIngredient(): void {
      if (this.selectedIngredient) {
        this.ingredients = this.ingredients.filter((ingredient: Ingredient) => {
          return ingredient.name !== this.selectedIngredient.name;
        });
      }
      this.onChange.emit(this.ingredients);
    }

    clearIngredient(): void {
      this.ingredients = [];
      this.onChange.emit(this.ingredients);
    }

    setSelectedIngredient(ingredient: Ingredient): void {
      this.selectedIngredient = ingredient;
    }
}