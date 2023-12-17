import { Component, inject } from '@angular/core';
import { Product } from '../Models/product';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
//   providers: [ProductService]
})
export class ProductComponent {

    ProductList: Product[] = [];
    // productService: ProductService = inject(ProductService);
    
    constructor(private productService : ProductService) {
        this.productService.getAllProducts().then((ProductList: Product[]) => {
            this.ProductList = ProductList;
          });
    }

    
}
