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
  host: {
    "(window:resize)": "onWindowResize($event)",
  },
})
export class FitFreedomComponent implements OnInit {
  @Output() scrollPage = new EventEmitter<string>();
  isAnimationActive = false;
  isLineActive = false;
  isMobile: boolean;
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

  onWindowResize(event) {
    this.isMobile = event.target.innerWidth < 767;
  }

  scrollToPage(selectedPage: string) {
    const data = selectedPage;
    this.scrollPage.emit(data); // this emits the toggle status to parent component so that it can open or close the navigation accordingly.
  }
}
