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
  selector: "app-fit-touch",
  templateUrl: "./fit-touch.component.html",
  styleUrls: ["./fit-touch.component.css"],
})
export class FitTouchComponent implements OnInit {
  @Output() scrollPage = new EventEmitter<string>();
  isAnimationActive = false;
  isLineActive = false;
  fitCardData = FITTOUCHDATA;
  constructor() {}

  ngOnInit(): void {}

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    const fittouch = document.querySelector(".fittouch");
    const isContentActive = isInViewport(fittouch);
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
