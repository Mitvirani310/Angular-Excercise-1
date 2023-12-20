import { Component, inject } from '@angular/core';
import { Product } from '../Models/product';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {

    ProductList: Product[] = [];
    constructor(private productService : ProductService) {
        this.productService.getAllProducts().then((ProductList: Product[]) => {
            this.ProductList = ProductList;
          });
    } 
    resetUpdatedTimes(product: Product) {
      product.updatedProductTimes = 0;
  
      this.productService.resetUpdatedTimes(product.id).then(() => {
        console.log(`UpdatedProductTimes reset for city with id ${product.id}`);
      }).catch((error) => {
        console.error(error);
      });
    }   
}
