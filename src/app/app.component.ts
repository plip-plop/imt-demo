import { Component, OnInit } from '@angular/core';
import { Product } from './interfaces/product';
import { BasketService } from './services/basket.service';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'imtApp';

  totalPrice = 0;
  products = this.productService.getProducts();

  constructor(
    private readonly basketService: BasketService,
    private readonly productService: ProductService
  ) {

  }

  ajouterAuPanier($event: Product) {
    this.totalPrice += $event.price;
    --$event.stock;
  }

}
