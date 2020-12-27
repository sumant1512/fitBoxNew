import { ViewportScroller } from "@angular/common";
import { Component, HostListener, OnInit } from "@angular/core";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.css"],
})
export class LandingPageComponent implements OnInit {
  cardOne;
  cardTwo;
  cardThree;
  cardOneTop;
  cardTwoTop;
  cardThreeTop;
  cardFour;
  cardFourTop;
  cardFive;
  cardFiveTop;
  cardSix;
  cardSixTop;
  cardSeven;
  cardSevenTop;
  cardEight;
  cardEightTop;
  activeCard: string;
  previousCard: string;
  isMobile: boolean;
  constructor(private viewPortScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.activeCard = "banner";
    if (window.innerWidth < 768) {
      this.isMobile = true;
    }
  }

  scrollToPage(selectedPage: string) {
    this.viewPortScroller.scrollToAnchor(selectedPage);
    this.handlePreviousButtonAction(selectedPage);
  }

  handlePreviousButtonAction(page) {
    switch (page) {
      case "banner":
        window.scrollTo(0, 0);
        break;
      case "whyfitbox":
        this.cardTwo.classList.remove("latched");
        this.viewPortScroller.scrollToAnchor("whyfitbox");
        break;
      case "reasonstojoin":
        this.cardThree.classList.remove("latched");
        this.viewPortScroller.scrollToAnchor("reasonstojoin");
        break;
      case "reasonone":
        this.cardFour.classList.remove("latched");
        this.viewPortScroller.scrollToAnchor("reasonone");
        break;
      case "reasontwo":
        this.cardFive.classList.remove("latched");
        this.viewPortScroller.scrollToAnchor("reasontwo");
        break;
      case "reasonthree":
        this.cardSix.classList.remove("latched");
        this.viewPortScroller.scrollToAnchor("reasonthree");
        break;
      case "reasonthree":
        this.cardSeven.classList.remove("latched");
        this.viewPortScroller.scrollToAnchor("whyfitbox");
        break;
      case "reasonfour":
        this.cardEight.classList.remove("latched");
        this.viewPortScroller.scrollToAnchor("reasonfour");
        break;
      default:
        break;
    }
  }

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    this.cardOne = document.querySelector(".one");
    this.cardOneTop = 0;
    this.cardTwo = document.querySelector(".two");
    this.cardTwoTop = window.innerHeight * 1;
    this.cardThree = document.querySelector(".three");
    this.cardThreeTop = window.innerHeight * 2;
    this.cardFour = document.querySelector(".four");
    this.cardFourTop = window.innerHeight * 3;
    this.cardFive = document.querySelector(".five");
    this.cardFiveTop = window.innerHeight * 4;
    this.cardSix = document.querySelector(".six");
    this.cardSixTop = window.innerHeight * 5;
    this.cardSeven = document.querySelector(".seven");
    this.cardSevenTop = window.innerHeight * 6;
    this.cardEight = document.querySelector(".eight");
    this.cardEightTop = window.innerHeight * 7;
    var st = window.pageYOffset;

    /* change classes based on section positions */
    if (st >= this.cardOneTop) {
      this.cardOne.classList.add("latched");
    } else {
      this.cardOne.classList.remove("latched");
    }
    if (st >= this.cardTwoTop) {
      this.cardTwo.classList.add("latched");
    } else {
      this.cardTwo.classList.remove("latched");
    }
    if (st >= this.cardThreeTop) {
      this.cardThree.classList.add("latched");
    } else {
      this.cardThree.classList.remove("latched");
    }
    if (st >= this.cardFourTop) {
      this.cardFour.classList.add("latched");
    } else {
      this.cardFour.classList.remove("latched");
    }
    if (st >= this.cardFiveTop) {
      this.cardFive.classList.add("latched");
    } else {
      this.cardFive.classList.remove("latched");
    }
    if (st >= this.cardSixTop) {
      this.cardSix.classList.add("latched");
    } else {
      this.cardSix.classList.remove("latched");
    }
    if (st >= this.cardSevenTop) {
      this.cardSeven.classList.add("latched");
    } else {
      this.cardSeven.classList.remove("latched");
    }
    if (st >= this.cardEightTop) {
      this.cardEight.classList.add("latched");
    } else {
      this.cardEight.classList.remove("latched");
    }
  }
}
