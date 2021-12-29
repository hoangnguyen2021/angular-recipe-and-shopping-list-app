import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';
import { ShoppingListService } from '../../services/shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  name: string;
  amount: number;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  handleButtonAdd() {
    this.shoppingListService.addIngredient(new Ingredient(this.name, this.amount));
  }

  handleButtonDelete() {
    this.shoppingListService.deleteIngredient();
  }

  handleButtonClear() {
    this.shoppingListService.clearIngredient();
  }
}
