import { Component, EventEmitter, HostListener, OnInit, Output } from "@angular/core";
import { FITFREEDOMDATA } from "../constants";
import { isInViewport } from "../view-port-check";

@Component({
  selector: "app-fit-freedom-mobile",
  templateUrl: "./fit-freedom-mobile.component.html",
  styleUrls: ["./fit-freedom-mobile.component.css"],
})
export class FitFreedomMobileComponent implements OnInit {
  @Output() scrollPage = new EventEmitter<string>();
  isAnimationActive = false;
  isLineActive = false;
  fitCardData = FITFREEDOMDATA;
  constructor() {}

  ngOnInit(): void {}

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    const fitfreedommobile = document.querySelector(".fitfreedommobile");
    const isContentActive = isInViewport(fitfreedommobile);
    if (isContentActive) {
      this.isAnimationActive = true;
      setTimeout(() => {
        this.isLineActive = true;
      }, 300);
    }
  }

  scrollToPage(selectedPage: string) {
    this.scrollPage.emit(selectedPage); // this emits the toggle status to parent component so that it can open or close the navigation accordingly.
  }
}
