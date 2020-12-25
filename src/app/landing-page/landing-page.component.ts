import { Component, HostListener, OnInit } from "@angular/core";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.css"],
})
export class LandingPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    var d1 = document.querySelector(".one");
    var d1orgtop = 8;
    console.log(d1orgtop);
    var d2 = document.querySelector(".two");
    var d2orgtop = 600;
    console.log(d2orgtop);
    var d3 = document.querySelector(".three");
    var d3orgtop = 1200;
    console.log(d3orgtop);
    var d4 = document.querySelector(".four");
    var d4orgtop = 1800;
    console.log(d4orgtop);

    var st = window.pageYOffset;

    /* change classes based on section positions */
    if (st >= d1orgtop) {
      d1.classList.add("latched");
    } else {
      d1.classList.remove("latched");
    }
    if (st >= d2orgtop) {
      d2.classList.add("latched");
    } else {
      d2.classList.remove("latched");
    }
    if (st >= d3orgtop) {
      d3.classList.add("latched");
    } else {
      d3.classList.remove("latched");
    }
    if (st >= d4orgtop) {
      d4.classList.add("latched");
    } else {
      d4.classList.remove("latched");
    }
  }
}
