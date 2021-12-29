import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';
import { RecipesService } from '../../../services/recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  
  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
  }

  handleRecipeItemClick(): void {
    this.recipesService.setSelectedRecipe(this.recipe.id);
  }

}
