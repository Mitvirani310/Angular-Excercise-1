import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  @ViewChild('myForm') form !: NgForm;

  constructor(private productService: ProductService, private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      this.productId = params['id'];
      console.log(this.productId);
    });

    this.productService.getProductById(this.productId).then((product: Product) => {
      this.product = product;
      console.log(product);

      this.form.setValue({
        prodid: this.product.id,
        prodname: this.product.name,
        prodprice: this.product.price,
        prodquantity: this.product.quantity
      })
    });
  }

  OnSubmit() {
    if (this.form.valid) {
      const updatedProduct: Product = {
        id: this.form.value.prodid,
        name: this.form.value.prodname,
        price: this.form.value.prodprice,
        quantity: this.form.value.prodquantity,
      };
      console.log(updatedProduct)
      // Call the service method to update the product data
      this.productService.updateProduct(updatedProduct).then(() => {
        console.log('Product data updated successfully!');
        // You can also navigate back to the product list or perform other actions
      });
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }

}
