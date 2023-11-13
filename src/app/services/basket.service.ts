import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  basketSubject$ = new BehaviorSubject<Product[]>([]);

  constructor(private readonly http: HttpClient) { }
  
  loadBasket(): void {
     this.http.get<Product[]>('http://localhost:8080/rest/bakset').subscribe(
      success => this.basketSubject$.next(success),
    );
  }

  addToBasket(product : Product): void {
    this.http.post('http://localhost:8080/rest/bakset', product).subscribe();
    this.loadBasket();
 }

 getTotalBasket(): Observable<number> {
  return this.basketSubject$.pipe(
     map(products => products.reduce((previous, product) => previous + product.price, 0))
   );
 }
}
