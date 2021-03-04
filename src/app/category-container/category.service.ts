import { Injectable } from '@angular/core';
import { ICategory } from './models';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public categories: Array<ICategory> = [
    {
      id:1,
      name: "Women"
    },
    {
      id:2,
      name: "Men"
    },
    {
      id:3,
      name: "Boys"
    },
    {
      id:4,
      name: "Girls"
    },
    {
      id:5,
      name: "Shoes"
    },
  ]

  constructor() { }

  public getCategories(): Array<ICategory> {
    return  this.categories
  }

  public getCategory(id: string): ICategory {
    const numberId = parseInt(id)
    return this.categories.find(category => category.id === numberId);
  }

}
