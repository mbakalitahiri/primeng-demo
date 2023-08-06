import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { CarouselBasicDemo } from "./demo/carousel-basic-demo"
import { CartDetailComponent } from "./shop/cart-detail/cart-detail.component"
import { CheckoutComponent } from "./shop/checkout/checkout.component"
import { ProductDetailComponent } from "./shop/product-detail/product-detail.component"
import { DataviewComponent } from "./shop/dataview/dataview.component"
import { LandingComponent } from "./shared/landing/landing.component"
import { TableComponent } from "./shared/table/table.component"
import { DashboardComponent } from "./shared/dashboard/dashboard.component"

const routes: Routes = [
  { path: "cart", component: CartDetailComponent },
  { path: "checkout", component: CheckoutComponent },
  { path: "demo", component: CarouselBasicDemo },
  { path: "product/:id", component: ProductDetailComponent },
  { path: "dataView", component: DataviewComponent },
  { path: "landing", component: LandingComponent },
  { path: "customers", component: TableComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "**", redirectTo: "landing" },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
