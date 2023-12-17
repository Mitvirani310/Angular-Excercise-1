import { Injectable } from '@angular/core';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  url = 'http://localhost:3000/products';

  async getAllProducts(): Promise<Product[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getProductById(id :number) : Promise<Product> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }


  // getAllProducts(): Product[] {
  //   return this.Products;
  // }
}
