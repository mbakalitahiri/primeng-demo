import { Component, OnDestroy, OnInit } from "@angular/core"
import { MenuItem } from "primeng/api"
import { Subscription } from "rxjs"
import { Product } from "src/app/domain/product.model"
import { ProductRepository } from "src/app/repository/product.repository"
import { LayoutService } from "src/app/services/app.layout"

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit, OnDestroy {
  items!: MenuItem[]

  chartData: any

  chartOptions: any

  subscription!: Subscription
  public selectedCategory: string = ""

  constructor(
    private productService: ProductRepository,
    public layoutService: LayoutService
  ) {
    this.subscription = this.layoutService.configUpdate$.subscribe(() => {
      this.initChart()
    })
  }

  ngOnInit() {
    this.initChart()

    this.items = [
      { label: "Add New", icon: "pi pi-fw pi-plus" },
      { label: "Remove", icon: "pi pi-fw pi-minus" },
    ]
  }

  initChart() {
    const documentStyle = getComputedStyle(document.documentElement)
    const textColor = documentStyle.getPropertyValue("--text-color")
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    )
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border")

    this.chartData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "First Dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor: documentStyle.getPropertyValue("--bluegray-700"),
          borderColor: documentStyle.getPropertyValue("--bluegray-700"),
          tension: 0.4,
        },
        {
          label: "Second Dataset",
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          backgroundColor: documentStyle.getPropertyValue("--green-600"),
          borderColor: documentStyle.getPropertyValue("--green-600"),
          tension: 0.4,
        },
      ],
    }

    this.chartOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    }
  }

  get products(): Product[] {
    return this.productService.getProducts(this.selectedCategory)
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }
}
