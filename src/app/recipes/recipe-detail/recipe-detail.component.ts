import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../models/recipe.model';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private recipesService: RecipesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    /**this.recipe = this.recipesService.selectedRecipe;
    this.recipesService.onRecipeSelect.subscribe(() => {
      this.recipe = this.recipesService.selectedRecipe;
    });*/
    let id: number = Number.parseInt(this.route.snapshot.params['id']);
    this.recipe = this.recipesService.getRecipeById(id);
  }

}
