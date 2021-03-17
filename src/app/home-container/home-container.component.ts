import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models';
import { ProductsService } from '../product-container/products.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
})
export class HomeContainerComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  public productList: Array<IProduct> = [];

  ngOnInit(): void {
    this.productList = this.productsService.getProducts();
  }

  public getProducts(): Array<IProduct> {
    return this.productsService.getProducts();
  }
}
