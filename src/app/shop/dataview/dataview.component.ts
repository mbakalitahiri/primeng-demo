import { Component, OnInit } from "@angular/core"
import { MessageService } from "primeng/api"
import { Cart } from "src/app/domain/cart.model"
import { Product } from "src/app/domain/product.model"
import { ProductRepository } from "src/app/repository/product.repository"

@Component({
  selector: "app-dataview",
  templateUrl: "./dataview.component.html",
  styleUrls: ["./dataview.component.scss"],
  providers: [MessageService],
})
export class DataviewComponent implements OnInit {
  public selectedCategory: string = ""
  sortField = "price"
  sortOrder = ""

  responsiveOptions: any[] | undefined

  constructor(
    private repository: ProductRepository,
    private cart: Cart,
    private messageService: MessageService
  ) {}
  show() {
    this.messageService.add({
      severity: "success",
      summary: "Success",
      detail: "Product Added",
    })
  }
  get products(): Product[] {
    return this.repository.getProducts(this.selectedCategory)
  }
  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: "1199px",
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: "991px",
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: "767px",
        numVisible: 1,
        numScroll: 1,
      },
    ]
  }

  getSeverity(status: string) {
    switch (status) {
      case "INSTOCK":
        return "success"
      case "LOWSTOCK":
        return "warning"
      case "OUTOFSTOCK":
        return "danger"
    }
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product)
  }

  get categories(): string[] {
    return this.repository.getCategories()
  }

  changeCategory(newCategory?: string) {
    newCategory ? (this.selectedCategory = newCategory) : ""
  }
}
