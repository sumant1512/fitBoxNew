import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from "@angular/core";
import { FITSMILEDATA } from "../constants";
import { isInViewport } from "../view-port-check";

@Component({
  selector: "app-fit-smile-mobile",
  templateUrl: "./fit-smile-mobile.component.html",
  styleUrls: ["./fit-smile-mobile.component.css"],
})
export class FitSmileMobileComponent implements OnInit {
  @Output() scrollPage = new EventEmitter<string>();
  isAnimationActive = false;
  isLineActive = false;
  fitCardData = FITSMILEDATA;
  constructor() {}

  ngOnInit(): void {}

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    const fitsmilemobile = document.querySelector(".fitsmilemobile");
    const isContentActive = isInViewport(fitsmilemobile);
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
