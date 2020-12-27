import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from "@angular/core";
import { isInViewport } from "src/app/view-port-check";

@Component({
  selector: "app-four-reasons-to-join",
  templateUrl: "./four-reasons-to-join.component.html",
  styleUrls: ["./four-reasons-to-join.component.css"],
})
export class FourReasonsToJoinComponent implements OnInit {
  @Output() scrollPage = new EventEmitter<string>();
  isAnimationActive = false;
  isLineActive = false;
  constructor() {}

  ngOnInit(): void {}

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    const reasonstojoin = document.querySelector(".reasonstojoin");
    const isContentActive = isInViewport(reasonstojoin);
    if (isContentActive) {
      this.isAnimationActive = true;
      setTimeout(() => {
        this.isLineActive = true;
      }, 300);
      setTimeout(() => {
        reasonstojoin.classList.add("heading-border-add");
      }, 500);
    }
  }

  scrollToPage(selectedPage: string) {
    this.scrollPage.emit(selectedPage); // this emits the toggle status to parent component so that it can open or close the navigation accordingly.
  }
}
