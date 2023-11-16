import { Component, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { BasketService } from 'src/app/services/basket.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  basketService = inject(BasketService);
  totalPrice = this.basketService.getTotalBasket();
  products: Product[] = []; // Souscription par ".subscribe()"
  produits$: Observable<Product[]> = of([]); // Souscription par "| async" (voir "app-component.html")


  constructor(

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
    // this.totalPrice += $event.price;
    --$event.stock;
  }
}
