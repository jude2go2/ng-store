import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartContainerComponent } from './cart-container/cart-container.component';
import { CategoryContainerComponent } from './category-container/category-container.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { ProductContainerComponent } from './product-container/product-container.component';

const routes: Routes = [
  { path: '', component: HomeContainerComponent },
  { path: 'category/:id', component: CategoryContainerComponent },
  { path: 'product/:id', component: ProductContainerComponent },
  { path: 'cart', component: CartContainerComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule],
})
export class AppRoutingModule {}
