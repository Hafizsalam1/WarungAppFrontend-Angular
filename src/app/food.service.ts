import { Injectable } from '@angular/core';
import { FoodItemComponent } from './food-item/food-item.component';
import { FoodItem } from './FoodItem';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  FoodItemList: FoodItem[] = [{
    id: 0,
    name: 'Sushi',
    price: 120000,
    photo: 'assets/sushi.jpg',
    stock: 100,
    description:"Sushi roll"
  }, 
  {
    id: 1,
    name: 'Ramen',
    price: 86000,
    photo: 'assets/ramen.jpg',
    stock: 100,
    description:"Miso Ramen"
  }, 
{
  id: 2,
  name: 'Salad',
  price: 20000,
  photo: 'assets/sald.jpg',
  stock: 100,
  description:"Cold spicy salad with chicken"

},
{
  id: 3,
  name: 'Sate',
  price: 77000,
  photo: 'assets/sate.jpg',
  stock: 100,
  description:"Taichan satai"


},
{
  id: 4,
  name: 'Nasi Goreng',
  price: 45000,
  photo: 'assets/nasgor.jpg',
  stock: 100,
  description:"Nasi Goreng with egg"
}
];

  getAllFood(): FoodItem[] {
    return this.FoodItemList
  }

  getFoodById(id: number): FoodItem | undefined {
    return this.FoodItemList.find(FoodItem => FoodItem.id === id)
  }
}
