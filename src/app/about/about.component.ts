import { Component, ElementRef, HostListener, OnInit } from "@angular/core";
import { ToggleStatusEmit } from "../data.type";
import { isInViewport } from "../view-port-check";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  isAnimationActive = false;
  isLineActive = false;
  constructor(public el: ElementRef) {}

  ngOnInit() {
    console.log(window.pageYOffset);
    setTimeout(() => {
      this.isLineActive = true;
    }, 300);
  }

  toggleforHeader(selectedPage: ToggleStatusEmit) {
    switch (selectedPage.selectedPage) {
      case "mission":
        setTimeout(() => {
          window.scrollTo({ top: 100, behavior: "smooth" });
        }, 1);
        break;
      case "vision":
        setTimeout(() => {
          window.scrollTo({ top: 120, behavior: "smooth" });
        }, 1);
        break;
      case "goals":
        setTimeout(() => {
          window.scrollTo({ top: 250, behavior: "smooth" });
        }, 1);
        break;
      default:
        setTimeout(() => {
          document
            .getElementById(selectedPage.selectedPage)
            .scrollIntoView({ behavior: "smooth" });
        }, 1);
    }
  }

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    const mission = document.querySelector(".mission");
    const isContentActive = isInViewport(mission) ? true : false;
    if (isContentActive) {
      this.isAnimationActive = true;
      setTimeout(() => {
        this.isLineActive = true;
      }, 300);
    }
  }
}
