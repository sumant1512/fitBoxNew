import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from "@angular/core";
import {
  FITDIGITALDATA,
  FITGROUPXDATA,
  FITPAYDATA,
  FITTRAINDATA,
} from "../constants";
import { isInViewport } from "../view-port-check";

@Component({
  selector: "app-fit-features-carousel",
  templateUrl: "./fit-features-carousel.component.html",
  styleUrls: ["./fit-features-carousel.component.css"],
})
export class FitFeaturesCarouselComponent implements OnInit {
  @Output() scrollPage = new EventEmitter<string>();
  isPageActive: boolean;
  isAnimationActiveFreedom = false;
  isLineActiveFreedom = false;
  isAnimationActiveFreedomMobile = false;
  isLineActiveFreedomMobile = false;

  isAnimationActiveFlow = false;
  isLineActiveFlow = false;
  isAnimationActiveFlowMobile = false;
  isLineActiveFlowMobile = false;

  isAnimationActiveSmile = false;
  isLineActiveSmile = false;
  isAnimationActiveSmileMobile = false;
  isLineActiveSmileMobile = false;

  isAnimationActiveTouch = false;
  isLineActiveTouch = false;
  isAnimationActiveTouchMobile = false;
  isLineActiveTouchMobile = false;

  isAnimationActiveLogo = false;
  isLineActiveLogo = false;
  fitFreedomCardData = FITPAYDATA;
  fitFlowCardData = FITTRAINDATA;
  fitSmileCardData = FITDIGITALDATA;
  fitTouchCardData = FITGROUPXDATA;
  constructor() {}

  ngOnInit(): void {}

  isPageActiveCheck(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    const pagecheck = document.querySelector(".pagecheck");
    const isPageActiveElement = this.isPageActiveCheck(pagecheck);
    if (isPageActiveElement) {
      this.isPageActive = true;
    }

    const fitfreedom = document.querySelector(".fitfreedom");
    const isContentActiveFreedom = isInViewport(fitfreedom);
    if (isContentActiveFreedom) {
      this.isAnimationActiveFreedom = true;
      setTimeout(() => {
        this.isLineActiveFreedom = true;
      }, 300);
    }

    const fitfreedommobile = document.querySelector(".fitfreedommobile");
    const isContentActiveFreedomMobile = isInViewport(fitfreedommobile);
    if (isContentActiveFreedomMobile) {
      this.isAnimationActiveFreedomMobile = true;
      setTimeout(() => {
        this.isLineActiveFreedomMobile = true;
      }, 300);
    }

    const fitflow = document.querySelector(".fitflow");
    const isContentActiveFlow = isInViewport(fitflow);
    if (isContentActiveFlow) {
      this.isAnimationActiveFlow = true;
      setTimeout(() => {
        this.isLineActiveFlow = true;
      }, 300);
    }

    const fitflowmobile = document.querySelector(".fitflowmobile");
    const isContentActiveFlowMobile = isInViewport(fitflowmobile);
    if (isContentActiveFlowMobile) {
      this.isAnimationActiveFlowMobile = true;
      setTimeout(() => {
        this.isLineActiveFlowMobile = true;
      }, 300);
    }

    const fitsmile = document.querySelector(".fitsmile");
    const isContentActiveSmile = isInViewport(fitsmile);
    if (isContentActiveSmile) {
      this.isAnimationActiveSmile = true;
      setTimeout(() => {
        this.isLineActiveSmile = true;
      }, 300);
    }

    const fitsmilemobile = document.querySelector(".fitsmilemobile");
    const isContentActiveSmileMobile = isInViewport(fitsmilemobile);
    if (isContentActiveSmileMobile) {
      this.isAnimationActiveSmileMobile = true;
      setTimeout(() => {
        this.isLineActiveSmileMobile = true;
      }, 300);
    }

    const fittouch = document.querySelector(".fittouch");
    const isContentActiveTouch = isInViewport(fittouch);
    if (isContentActiveTouch) {
      this.isAnimationActiveTouch = true;
      setTimeout(() => {
        this.isLineActiveTouch = true;
      }, 300);
    }

    const fittouchmobile = document.querySelector(".fittouchmobile");
    const isContentActiveTouchMobile = isInViewport(fittouchmobile);
    if (isContentActiveTouchMobile) {
      this.isAnimationActiveTouchMobile = true;
      setTimeout(() => {
        this.isLineActiveTouchMobile = true;
      }, 300);
    }

    const fitlogo = document.querySelector(".fitlogo");
    const isContentActiveLogo = isInViewport(fitlogo) ? true : false;
    if (isContentActiveLogo) {
      this.isAnimationActiveLogo = true;
      setTimeout(() => {
        this.isLineActiveLogo = true;
      }, 300);
    }
  }
}
