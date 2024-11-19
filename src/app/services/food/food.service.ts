import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAll():Foods[] {
    return[
      {
        id: 1,
        name: 'Vegetarian Pizza',
        price: 14,
        cookTime: '15-20',
        favorite: true,
        original: ['Italy'],
        stars: 4.8,
        imageurl: '/assets/product_01.1.jpg',
        tags: ['Vegetarian', 'Pizza', 'Italian'],
      },
      {
        id: 2,
        name: 'Cheese Pizza',
        price: 12,
        cookTime: '10-15',
        favorite: false,
        original: ['Italy'],
        stars: 4.5,
        imageurl: '/assets/product_01.3.jpg',
        tags: ['Cheese', 'Pizza', 'Italian'],
      },
      {
        id: 3,
        name: 'Classic Hamburger',
        price: 8,
        cookTime: '10-12',
        favorite: true,
        original: ['Germany', 'US'],
        stars: 4.7,
        imageurl: '/assets/product_2.1.jpg',
        tags: ['FastFood', 'Hamburger', 'Classic'],
      },
      {
        id: 4,
        name: 'Double Cheeseburger',
        price: 10,
        cookTime: '12-15',
        favorite: false,
        original: ['US'],
        stars: 4.6,
        imageurl: '/assets/product_2.2.jpg',
        tags: ['Cheeseburger', 'FastFood'],
      },
      {
        id: 5,
        name: 'Mushroom Burger',
        price: 9,
        cookTime: '12-15',
        favorite: true,
        original: ['US'],
        stars: 4.4,
        imageurl: '/assets/product_3.2.jpg',
        tags: ['Mushroom', 'Burger', 'FastFood'],
      },
      {
        id: 6,
        name: 'BBQ Bacon Burger',
        price: 11,
        cookTime: '15-20',
        favorite: false,
        original: ['US'],
        stars: 4.9,
        imageurl: '/assets/product_09.jpg',
        tags: ['BBQ', 'Bacon', 'Burger'],
      },
      {
        id: 7,
        name: 'Egg & Bacon Burger',
        price: 10,
        cookTime: '10-15',
        favorite: true,
        original: ['US'],
        stars: 4.3,
        imageurl: '/assets/product_04.jpg',
        tags: ['Egg', 'Bacon', 'Burger'],
      },
      {
        id: 8,
        name: 'Blue Cheese Burger',
        price: 13,
        cookTime: '15-20',
        favorite: false,
        original: ['US'],
        stars: 4.7,
        imageurl: '/assets/product_08.jpg',
        tags: ['Blue Cheese', 'Burger', 'Gourmet'],
      },
    ];
  }
}
