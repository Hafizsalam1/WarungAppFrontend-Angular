import { Component, inject  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodItem } from '../FoodItem';
import { FoodItemComponent } from '../food-item/food-item.component';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FoodItemComponent],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by name">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
    <app-food-item *ngFor="let FoodItem of FoodItemList" [FoodItem]="FoodItem"></app-food-item>
  </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  FoodItemList: FoodItem[] = [];
  foodService: FoodService = inject(FoodService)
  constructor(){
    this.FoodItemList = this.foodService.getAllFood();
  }

}
