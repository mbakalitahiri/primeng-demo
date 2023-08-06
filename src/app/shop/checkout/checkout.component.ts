import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Order } from "src/app/domain/order.model";
import { OrderRepository } from "src/app/repository/order.repository";
@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.css"],
})
export class CheckoutComponent {
  orderSent: boolean = false;
  submitted: boolean = false;
  constructor(public repository: OrderRepository, public order: Order) {}
  submitOrder(form: NgForm, order: Order) {
    this.submitted = true;
    if (form.valid) {
      this.repository.saveOrder(order).subscribe((order: Order) => {
        this.orderSent = true;
        this.submitted = false;
        this.order.clear();
      });
    }
  }
}
