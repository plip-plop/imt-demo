import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [];

  constructor(private readonly http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/rest/products');
  }

  // getProduct(id: number): Product | undefined {
  //   const product = this.products.find(product => product.id === id);
  //   return product;
  // }

  // decreaseProduct(id: number): void {
  //   const product = this.products.find(product => product.id === id);
  //   if (product) {
  //     --product.stock;
  //   }
  // }

  // hasLimitedStock(id: number): boolean {
  //   const product = this.products.find(product => product.id === id);
  //   return product?.stock === 1;
  // }

  // hasNoStock(id: number): boolean {
  //   const product = this.products.find(product => product.id === id);
  //   return product?.stock === 0;
  // }
}
