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
  activeCard: string;
  previousCard: string;
  constructor(private viewPortScroller: ViewportScroller) {}

  ngOnInit(): void {
    this.activeCard = "banner";
  }

  scrollToPage(selectedPage: string) {
    this.viewPortScroller.scrollToAnchor(selectedPage);
  }

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    this.cardOne = document.querySelector(".one");
    this.cardOneTop = 0;
    this.cardTwo = document.querySelector(".two");
    this.cardTwoTop = 600;
    this.cardThree = document.querySelector(".three");
    this.cardThreeTop = 1200;
    this.cardFour = document.querySelector(".four");
    this.cardFourTop = 1800;
    this.cardFive = document.querySelector(".five");
    this.cardFiveTop = 2400;
    this.cardSix = document.querySelector(".six");
    this.cardSixTop = 3000;
    this.cardSeven = document.querySelector(".seven");
    this.cardSevenTop = 3600;
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
  }
}
