import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from "@angular/core";
import { FITTOUCHDATA } from "../constants";
import { isInViewport } from "../view-port-check";

@Component({
  selector: "app-fit-touch-mobile",
  templateUrl: "./fit-touch-mobile.component.html",
  styleUrls: ["./fit-touch-mobile.component.css"],
})
export class FitTouchMobileComponent implements OnInit {
  @Output() scrollPage = new EventEmitter<string>();
  isAnimationActive = false;
  isLineActive = false;
  fitCardData = FITTOUCHDATA;
  constructor() {}

  ngOnInit(): void {}

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    const fittouchmobile = document.querySelector(".fittouchmobile");
    const isContentActive = isInViewport(fittouchmobile);
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
