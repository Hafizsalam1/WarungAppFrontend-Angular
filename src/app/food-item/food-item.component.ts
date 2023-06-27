import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodItem } from '../FoodItem';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-food-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template:  `
  <section class="listing">
    <img class="listing-photo" [src]="FoodItem.photo" alt="Exterior photo of {{FoodItem.name}}">
    <h2 class="listing-heading">{{ FoodItem.name }}</h2>
    <p class="listing-heading">Price: {{FoodItem.price}}</p>
    <p class="listing-heading">Stock: {{FoodItem.stock}}</p>
    <a [routerLink]="['/details', FoodItem.id]">Learn More</a>
    <router-outlet></router-outlet>
  </section>
  `,
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent {

  @Input() FoodItem!: FoodItem;

}
