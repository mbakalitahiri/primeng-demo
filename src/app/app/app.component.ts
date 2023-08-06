import { Component, OnInit } from "@angular/core"
import { MegaMenuItem, MenuItem } from "primeng/api"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  breadcrumbItems: MenuItem[] = []

  tieredItems: MenuItem[] = []

  items: MenuItem[] = []

  routeItems: MenuItem[] = []

  megaMenuItems: MegaMenuItem[] = []

  panelMenuItems: MenuItem[] = []

  stepsItems: MenuItem[] = []

  slideItems: MenuItem[] = []

  menuItems: MenuItem[] = []

  plainMenuItems: MenuItem[] = []

  ngOnInit(): void {
    this.items = [
      {
        label: "Customers",
        items: [
          {
            label: "View",
            icon: "pi pi-fw pi-list",
            url: "customers",
          },
          {
            label: "New",
            icon: "pi pi-fw pi-plus",
          },
          {
            label: "Edit",
            icon: "pi pi-fw pi-user-edit",
          },
        ],
      },
      {
        label: "Dashboard",
        items: [
          {
            label: "View",
            icon: "pi pi-fw pi-list",
            url: "dashboard",
          },
          {
            label: "Search",
            icon: "pi pi-fw pi-search",
          },
        ],
      },
      {
        label: "Products",
        items: [
          {
            label: "View",
            icon: "pi pi-fw pi-list",
            url: "dataView",
          },
          {
            label: "Tracker",
            icon: "pi pi-fw pi-compass",
          },
          {
            label: "Map",
            icon: "pi pi-fw pi-map-marker",
          },
          {
            label: "Manage",
            icon: "pi pi-fw pi-pencil",
          },
        ],
      },
    ]
  }
}
