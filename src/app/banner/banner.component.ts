import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from "@angular/core";
import { Router } from "@angular/router";
import { NAVLIST } from "../constants";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.css"],
})
export class BannerComponent implements OnInit {
  @Output() scrollPage = new EventEmitter<string>();
  sideNavOpen: boolean;
  isMobile: boolean;
  navList = NAVLIST;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.sideNavOpen = true;
    if (window.innerWidth < 768) {
      this.isMobile = true;
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    if (event.target.innerWidth < 768) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  navToggle(selectedPage?: string) {
    this.sideNavOpen = !this.sideNavOpen;
    if (this.sideNavOpen) {
      this.closeNav();
    } else {
      this.openNav();
    }
  }

  openNav() {
    document.getElementById("sideBar").style.width = this.isMobile
      ? "100%"
      : "30%";
  }

  closeNav() {
    document.getElementById("sideBar").style.width = "0";
  }

  navigateToAbout() {
    this.router.navigateByUrl("/about");
  }

  scrollToPage(selectedPage: string) {
    this.scrollPage.emit(selectedPage); // this emits the toggle status to parent component so that it can open or close the navigation accordingly.
  }
}
