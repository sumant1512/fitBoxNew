import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from "@angular/core";
import { FITFLOWDATA } from "../constants";
import { isInViewport } from "../view-port-check";

@Component({
  selector: "app-fit-flow-mobile",
  templateUrl: "./fit-flow-mobile.component.html",
  styleUrls: ["./fit-flow-mobile.component.css"],
})
export class FitFlowMobileComponent implements OnInit {
  @Output() scrollPage = new EventEmitter<string>();
  isAnimationActive = false;
  isLineActive = false;
  fitCardData = FITFLOWDATA;
  constructor() {}

  ngOnInit(): void {}

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    const fitflowmobile = document.querySelector(".fitflowmobile");
    const isContentActive = isInViewport(fitflowmobile);
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
