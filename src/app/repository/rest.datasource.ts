import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "src/app/domain/order.model";
import { Product } from "src/app/domain/product.model";

const PROTOCOL = "http";
const PORT = 3500;
@Injectable({ providedIn: "root" })
export class RestDataSource {
  baseUrl: string;
  constructor(private http: HttpClient) {
    console.log("dentro del constructor de RestDatasource");
    this.baseUrl = `${PROTOCOL}://localhost:${PORT}/`;
  }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + "products");
  }

  saveOrder(order: Order): Observable<Order> {
    console.log(order.cart);
    return this.http.post<Order>(this.baseUrl + "orders", order);
  }
}
