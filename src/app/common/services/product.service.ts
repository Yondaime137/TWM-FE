import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Product} from "../models/Product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url =
    'http://labs.fpv.umb.sk:8081/api/product';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
  getProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${productId}`);
  }
  createProduct(product: Product): Observable<number> {
    return this.http.post<number>(this.url, product);
  }
  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>
    (`${this.url}/${product.id}`, product);
  }
  deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>
    (`${this.url}/${productId}`);
  }
}
