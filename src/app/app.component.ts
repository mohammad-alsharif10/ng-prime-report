import {Component, OnInit} from '@angular/core';
import {ProductService} from "./service/product.service";
import {Product} from "./model/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.fetchProductsPage().subscribe(value => this.products = value.products);
  }


}
