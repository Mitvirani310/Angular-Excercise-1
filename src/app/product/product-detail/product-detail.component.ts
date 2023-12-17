import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  product !: Product;
  productId !: number;

  constructor(private productService : ProductService, private route : ActivatedRoute)
  {
     this.route.params.subscribe( (params : Params)=> {
        this.productId = params['id'];
        console.log(this.productId);
     });

     this.productService.getProductById(this.productId).then((product : Product) => {
      this.product = product;
      console.log(product);
     });
  }

}
