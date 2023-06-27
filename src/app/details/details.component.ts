import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../food.service';
import { FoodItem } from '../FoodItem';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      details works!
      <img class="listing-photo" [src]="foodItem?.photo"
      alt="Exterior photo of {{foodItem?.name}}"/>
      <section class="listing-description">
      <h2 class="listing-heading">{{foodItem?.name}}</h2>
      <p class="listing-location">{{foodItem?.price}}</p>
      <p class="listing-location">{{foodItem?.description}}</p>
    </section>

    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  foodService = inject(FoodService)
  foodItem: FoodItem | undefined

  constructor() {
      const foodItemId = Number(this.route.snapshot.params['id']);
      this.foodItem = 
      this.foodService.getFoodById(foodItemId)
  }

}
