import { Component, ElementRef, HostListener, OnInit } from "@angular/core";
import { isInViewport } from "../view-port-check";

@Component({
  selector: "app-fit-menu",
  templateUrl: "./fit-menu.component.html",
  styleUrls: ["./fit-menu.component.css"],
})
export class FitMenuComponent implements OnInit {
  isAnimationActive = false;
  isLineActive = false;
  constructor(public el: ElementRef) {}

  ngOnInit() {}

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    const fitmenu = document.querySelector(".fitmenu");
    const isContentActive = isInViewport(fitmenu) ? true : false;
    if (isContentActive) {
      this.isAnimationActive = true;
      setTimeout(() => {
        this.isLineActive = true;
      }, 300);
      setTimeout(() => {
        fitmenu.classList.add("heading-border-add");
      }, 500);
    }
  }
}
