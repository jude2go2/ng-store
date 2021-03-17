import { Injectable } from '@angular/core';
import { IProduct } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private _products: Array<IProduct> = [
    {
      id: '7bc8f2f8-d96c-4ec7-a877-6dfa220ca9ab',
      productName: 'Sauce - Oyster',
      price: 71,
      imageUrl: 'http://dummyimage.com/250x250.jpg/ff4444/ffffff',
      isInCart: false,
      category: 5,
    },
    {
      id: 'd2e0ce6d-5b49-485b-899e-5ce0a13f0047',
      productName: 'Puree - Raspberry',
      price: 27,
      imageUrl: 'http://dummyimage.com/250x250.jpg/cc0000/ffffff',
      isInCart: true,
      category: 4,
    },
    {
      id: 'f824d819-30a0-48b1-87df-a7a1e3b3c65b',
      productName: 'Wine - Magnotta - Bel Paese White',
      price: 52,
      imageUrl: 'http://dummyimage.com/250x250.jpg/dddddd/000000',
      isInCart: false,
      category: 5,
    },
    {
      id: '9a090013-c58c-41ed-8d8c-6b0360047007',
      productName: 'Broom And Brush Rack Black',
      price: 68,
      imageUrl: 'http://dummyimage.com/250x250.jpg/cc0000/ffffff',
      isInCart: true,
      category: 5,
    },
    {
      id: '918e75e0-9b4c-4604-914d-046453579dcf',
      productName: 'Broom Handle',
      price: 21,
      imageUrl: 'http://dummyimage.com/250x250.jpg/ff4444/ffffff',
      isInCart: false,
      category: 1,
    },
    {
      id: '8d10e112-7622-4774-b09c-49e7834f63de',
      productName: 'Spinach - Spinach Leaf',
      price: 99,
      imageUrl: 'http://dummyimage.com/250x250.jpg/ff4444/ffffff',
      isInCart: true,
      category: 3,
    },
    {
      id: 'a1eeff44-7638-4207-88fc-1752d182b9ee',
      productName: 'Emulsifier',
      price: 26,
      imageUrl: 'http://dummyimage.com/250x250.jpg/dddddd/000000',
      isInCart: false,
      category: 1,
    },
    {
      id: '0f96fe27-8c6b-4274-a6d4-2acb6fa30f64',
      productName: 'Pears - Fiorelle',
      price: 69,
      imageUrl: 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff',
      isInCart: true,
      category: 2,
    },
    {
      id: '1d7892e1-f45c-4a45-9d40-07c585e73e2f',
      productName: 'Wine - Casablanca Valley',
      price: 79,
      imageUrl: 'http://dummyimage.com/250x250.jpg/cc0000/ffffff',
      isInCart: true,
      category: 4,
    },
    {
      id: 'ad6733e2-a423-4fec-ac48-4041869607e4',
      productName: 'Spinach - Spinach Leaf',
      price: 77,
      imageUrl: 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff',
      isInCart: true,
      category: 3,
    },
    {
      id: '3bf02d7b-c588-426e-b782-be90d3e37629',
      productName: 'Wine - German Riesling',
      price: 55,
      imageUrl: 'http://dummyimage.com/250x250.jpg/ff4444/ffffff',
      isInCart: true,
      category: 2,
    },
    {
      id: '87af35fa-6b70-4286-96eb-9553b15218e0',
      productName: 'Gloves - Goldtouch Disposable',
      price: 66,
      imageUrl: 'http://dummyimage.com/250x250.jpg/dddddd/000000',
      isInCart: true,
      category: 1,
    },
  ];

  constructor() {}

  public getProducts(): Array<IProduct> {
    return this._products;
  }
}
