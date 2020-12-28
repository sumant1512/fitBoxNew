import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from "@angular/core";
import { isInViewport } from "../view-port-check";

@Component({
  selector: "app-why-fit-box",
  templateUrl: "./why-fit-box.component.html",
  styleUrls: ["./why-fit-box.component.css"],
  host: {
    "(window:resize)": "onWindowResize($event)",
  },
})
export class WhyFitBoxComponent implements OnInit {
  @Output() scrollPage = new EventEmitter<string>();
  isAnimationActive = false;
  isLineActive = false;
  isMobile: boolean;
  constructor() {}

  ngOnInit(): void {
    if (window.innerWidth < 768) {
      this.isMobile = true;
    }
  }

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

  onWindowResize(event) {
    this.isMobile = event.target.innerWidth < 767;
  }

  scrollToPage(selectedPage: string) {
    const data = selectedPage;
    this.scrollPage.emit(data); // this emits the toggle status to parent component so that it can open or close the navigation accordingly.
  }
}
