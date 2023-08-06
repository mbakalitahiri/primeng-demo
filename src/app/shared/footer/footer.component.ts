import { Component } from "@angular/core"
import { Router } from "@angular/router"
import { LayoutService } from "src/app/services/app.layout"

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {
  constructor(public layoutService: LayoutService, public router: Router) {}
}
