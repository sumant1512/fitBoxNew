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
  selector: "app-fit-smile",
  templateUrl: "./fit-smile.component.html",
  styleUrls: ["./fit-smile.component.css"],
})
export class FitSmileComponent implements OnInit {
  @Output() scrollPage = new EventEmitter<string>();
  isAnimationActive = false;
  isLineActive = false;
  fitCardData = FITSMILEDATA;
  constructor() {}

  ngOnInit(): void {}

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    const fitsmile = document.querySelector(".fitsmile");
    const isContentActive = isInViewport(fitsmile);
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
