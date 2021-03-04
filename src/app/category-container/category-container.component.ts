import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from './category.service';
import { ICategory } from './models';

@Component({
  selector: 'app-category-container',
  templateUrl: './category-container.component.html',
  styleUrls: ['./category-container.component.scss'],
})
export class CategoryContainerComponent implements OnInit, OnDestroy {
  public category: ICategory;

  private subscription: Subscription = new Subscription()

  constructor(private categoryService: CategoryService, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // this.category = this.categoryService.getCategory()
    
    this.subscription.add(
      this.activeRoute.params.subscribe(data => {
        this.category = this.categoryService.getCategory(data.id)
      })
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
