  import {
    Component,
    EventEmitter,
    HostListener,
    OnInit,
    Output,
  } from "@angular/core";
  import { isInViewport } from "src/app/view-port-check";
  import { FITFLOWDATA } from "../constants";

  @Component({
    selector: "app-fit-flow",
    templateUrl: "./fit-flow.component.html",
    styleUrls: ["./fit-flow.component.css"],
  })
  export class FitFlowComponent implements OnInit {
    @Output() scrollPage = new EventEmitter<string>();
    isAnimationActive = false;
    isLineActive = false;
    fitCardData = FITFLOWDATA;
    constructor() {}

    ngOnInit(): void {}

    @HostListener("window:scroll", ["$event"])
    checkScroll() {
      const fitflow = document.querySelector(".fitflow");
      const isContentActive = isInViewport(fitflow);
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
