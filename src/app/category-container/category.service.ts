import { Injectable } from '@angular/core';
import { ICategory } from './models';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  public getCategories(): Array<ICategory> {
    return  [
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
  }

}
