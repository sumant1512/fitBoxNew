import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from "@angular/core";
import { isInViewport } from "src/app/view-port-check";
import { FITFREEDOMDATA } from "../constants";

@Component({
  selector: "app-fit-freedom",
  templateUrl: "./fit-freedom.component.html",
  styleUrls: ["./fit-freedom.component.css"],
})
export class FitFreedomComponent implements OnInit {
  @Output() scrollPage = new EventEmitter<string>();
  isAnimationActive = false;
  isLineActive = false;
  fitCardData = FITFREEDOMDATA;
  constructor() {}

  ngOnInit(): void {}

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    const fitfreedom = document.querySelector(".fitfreedom");
    const isContentActive = isInViewport(fitfreedom);
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
