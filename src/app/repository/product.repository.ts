import { Injectable } from "@angular/core";
import { Product } from "src/app/domain/product.model";
import { StaticDataSource } from "./static.datasource";
@Injectable({ providedIn: "root" })
export class ProductRepository {
  private products: Product[] = [];
  private categories: string[] = [];
  constructor(private dataSource: StaticDataSource) {
    dataSource.getProducts().subscribe((data: any) => {
      this.products = data;
      this.categories = data

        .map((p: any) => p.category)
        .filter((c: any, index: any, array: any) => array.indexOf(c) == index)
        .sort();
    });
  }
  getProducts(category?: string): Product[] {
    return this.products.filter(
      (p) => category == "" || category == p.category
    );
  }
  getProduct(id: number): Product | undefined {
    const result = this.products.find((p) => p.id == id);
    return result;
  }
  getCategories(): string[] {
    return this.categories;
  }
}
