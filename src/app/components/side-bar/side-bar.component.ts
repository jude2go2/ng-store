import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../category-container/models';
import { CategoryService } from '../../category-container/category.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  public allCategories: Array<ICategory>

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.allCategories = this.categoryService.getCategories()
  }

}
