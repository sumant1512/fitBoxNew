import { Component, ElementRef, HostListener, OnInit } from "@angular/core";
import { isInViewport } from "../view-port-check";

@Component({
  selector: "app-fit-founder",
  templateUrl: "./fit-founder.component.html",
  styleUrls: ["./fit-founder.component.css"],
})
export class FitFounderComponent implements OnInit {
  isAnimationActive = false;
  isLineActive = false;
  constructor(public el: ElementRef) {}

  ngOnInit() {}

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    const testimonials = document.querySelector(".testimonials");
    const isContentActive = isInViewport(testimonials) ? true : false;
    if (isContentActive) {
      this.isAnimationActive = true;
      setTimeout(() => {
        this.isLineActive = true;
      }, 300);
    }
  }
}
