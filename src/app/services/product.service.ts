import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {
      id: 1,
      title: "Grand prix de Belcastel",
      description: "Faites avancer votre animal en le nourrissant et ainsi tenter de remporter la course du chaudron d'or !",
      photo: "assets/img/belcastel-xl.png",
      price: 50,
      stock: 2,
    },
    {
      id: 2,
      title: "Dungeon Petz",
      description: "Devenez chef des diablotins qui viennent de lancer une nouvelle entreprise : élevage d'animaux de compagnie.",
      photo: "assets/img/dungeon-petz-xl.png",
      price: 55,
      stock: 2,
    },
    {
      id: 3,
      title: "Heat",
      description: "Préparez-vous à plonger dans l'ambiance des courses automobiles des sixties avec Heat !",
      photo: "assets/img/heat-xl.png",
      price: 60,
      stock: 2,
    },
    {
      id: 4,
      title: "Terraforming Mars",
      description: "Dans Terraforming Mars, de puissantes corporations travaillent pour rendre la Planète Rouge habitable.",
      photo: "assets/img/terraforming-mars-xl.png",
      price: 65,
      stock: 5,
    },
  ];

  constructor(private readonly http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/rest/products');
  }

  getProduct(id: number): Product | undefined {
    const product = this.products.find(product => product.id === id);
    return product;
  }

  decreaseProduct(id: number): void {
    const product = this.products.find(product => product.id === id);
    if (product) {
      --product.stock;
    }
  }

  hasLimitedStock(id: number): boolean {
    const product = this.products.find(product => product.id === id);
    return product?.stock === 1;
  }

  hasNoStock(id: number): boolean {
    const product = this.products.find(product => product.id === id);
    return product?.stock === 0;
  }
}
