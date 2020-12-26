import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from "@angular/core";
import { isInViewport } from "src/app/view-port-check";

@Component({
  selector: "app-why-fit-box",
  templateUrl: "./why-fit-box.component.html",
  styleUrls: ["./why-fit-box.component.css"],
})
export class WhyFitBoxComponent implements OnInit {
  @Output() scrollPage = new EventEmitter<string>();
  isAnimationActive = false;
  isLineActive = false;
  constructor() {}

  ngOnInit(): void {}

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    const whyfitbox = document.querySelector(".whyfitbox");
    const isContentActive = isInViewport(whyfitbox);
    if (isContentActive) {
      this.isAnimationActive = true;
      setTimeout(() => {
        this.isLineActive = true;
      }, 300);
      setTimeout(() => {
        whyfitbox.classList.add("heading-border-add");
      }, 500);
    }
  }

  scrollToPage(selectedPage: string) {
    this.scrollPage.emit(selectedPage); // this emits the toggle status to parent component so that it can open or close the navigation accordingly.
  }
}
