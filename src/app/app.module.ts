import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { CategoryContainerComponent } from './category-container/category-container.component';
import { ProductContainerComponent } from './product-container/product-container.component';
import { CartContainerComponent } from './cart-container/cart-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeContainerComponent,
    CategoryContainerComponent,
    ProductContainerComponent,
    CartContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
