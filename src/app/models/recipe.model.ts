import { Ingredient } from './ingredient.model';

export class Recipe {
  static counter: number = 0;
  public id: number;

    constructor(public name: string, public description: string, public imageUrl: string, public ingredients: Ingredient[]) {
      this.id = ++Recipe.counter;
      this.name = name;
      this.description = description;
      this.imageUrl = imageUrl;
      this.ingredients = ingredients;
    }
}