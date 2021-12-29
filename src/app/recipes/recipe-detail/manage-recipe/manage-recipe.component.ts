import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../../../models/ingredient.model';
import { ShoppingListService } from '../../../services/shoppinglist.service';

@Component({
  selector: 'app-manage-recipe',
  templateUrl: './manage-recipe.component.html',
  styleUrls: ['./manage-recipe.component.css']
})
export class ManageRecipeComponent implements OnInit {
  @Input() ingredients: Ingredient[];
  hide: boolean = true;
  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  handleClick() {
    this.hide = !this.hide;
  }

  handleBlur() {
    this.hide = true;
  }

  handleOptionAdd() {
    this.shoppingListService.addIngredient(...this.ingredients);
  }
}
