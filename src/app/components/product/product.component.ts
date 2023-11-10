import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  product !: Product;

  @Output()
  ajouterPanier = new EventEmitter<Product>();

  onClick(product: Product): void {
    this.ajouterPanier.emit(product);
  }
}
