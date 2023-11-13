import { Component, OnInit } from '@angular/core';
import { Product } from './interfaces/product';
import { BasketService } from './services/basket.service';
import { ProductService } from './services/product.service';
import { Observable, Subscription, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'imtApp';

  totalPrice = 0;
  products: Product[] = []; // Souscription par ".subscribe()"
  produits$: Observable<Product[]> = of([]); // Souscription par "| async" (voir "app-component.html")

  constructor(
    private readonly basketService: BasketService,
    private readonly productService: ProductService
  ) {

  }

  ngOnInit() {
    // Ici, la souscription se fait un ".subscribe()"
    this.productService.getProducts().subscribe(
      success => this.products = success,
    );

    // Ici, on stocke l'observable, on y souscrit avec "| async" dans le template
    // Avantage: la désincription est géré par Angular.
    // Contrainte: Cela ne peut se faire ssi l'observable est utilisé dans le template HTML.
    this.produits$ = this.productService.getProducts();
  }

  ajouterAuPanier($event: Product) {
    this.totalPrice += $event.price;
    --$event.stock;
  }
}
