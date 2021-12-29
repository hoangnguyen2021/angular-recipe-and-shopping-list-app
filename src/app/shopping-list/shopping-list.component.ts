import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from '../services/shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.ingredients;
    
    this.shoppingListService.onChange.subscribe((event: Ingredient[]) => {
      this.ingredients = event;
    });
  }

  handleFocus(event: Ingredient) {
    this.shoppingListService.setSelectedIngredient(event);
  }
}
