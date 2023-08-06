import { Component, OnInit, inject } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { MessageService } from "primeng/api"
import { map } from "rxjs"
import { Cart } from "src/app/domain/cart.model"
import { Product } from "src/app/domain/product.model"
import { ProductRepository } from "src/app/repository/product.repository"

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"],
  providers: [MessageService],
})
export class ProductDetailComponent implements OnInit {
  activated: ActivatedRoute = inject(ActivatedRoute)
  product: Product

  constructor(
    private service: ProductRepository,
    private cart: Cart,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.activated.params
      .pipe(
        map((data: any) => {
          const id = data.id
          return id
        }),
        map((id) => id)
      )
      .subscribe({
        complete: () => {},
        next: (data: number) => {
          this.product = this.service.getProduct(data)
        },
        error: (error: any) => console.log(error),
      })
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product)
  }
  show() {
    this.messageService.add({
      severity: "success",
      summary: "Success",
      detail: "Product Added",
    })
  }
}
