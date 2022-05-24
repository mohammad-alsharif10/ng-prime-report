import {Injectable} from '@angular/core';
import {ProductPage} from "../model/product-page";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  public fetchProductsPage(): Observable<ProductPage> {
    return this.http.get<ProductPage>("https://dummyjson.com/products");
  }
}
