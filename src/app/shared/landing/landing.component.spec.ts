import { ComponentFixture, TestBed } from "@angular/core/testing"

import { LandingComponent } from "./landing.component"

describe("TestingComponent", () => {
  let component: LandingComponent
  let fixture: ComponentFixture<LandingComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingComponent],
    })
    fixture = TestBed.createComponent(LandingComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
