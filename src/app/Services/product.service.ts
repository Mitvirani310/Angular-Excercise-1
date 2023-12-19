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

  async updateProduct(updatedProduct: Product): Promise<void> {
    const response = await fetch(`${this.url}/${updatedProduct.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    });

    if (!response.ok) {
      throw new Error(`Failed to update product with id ${updatedProduct.id}`);
    }
  }
}
