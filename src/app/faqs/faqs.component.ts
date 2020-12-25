import { Component, ElementRef, HostListener, OnInit } from "@angular/core";
import { FAQLIST } from "../constants";
import { isInViewport } from "../view-port-check";

@Component({
  selector: "app-faqs",
  templateUrl: "./faqs.component.html",
  styleUrls: ["./faqs.component.css"],
})
export class FaqsComponent implements OnInit {
  faqList = FAQLIST;
  isAnimationActive = false;
  isLineActive = false;
  constructor(public el: ElementRef) {}

  ngOnInit() {}

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    const faq = document.querySelector(".faq");
    const isContentActive = isInViewport(faq) ? true : false;
    if (isContentActive) {
      this.isAnimationActive = true;
      setTimeout(() => {
        this.isLineActive = true;
      }, 300);
      setTimeout(() => {
        faq.classList.add("heading-border-add");
      }, 500);
    }
  }
}
