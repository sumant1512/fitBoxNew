import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { Router } from "@angular/router";
import { ToggleStatusEmit } from "../data.type";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  @Output() toggleStatus = new EventEmitter<ToggleStatusEmit>();
  @ViewChild("header", { static: false }) header: ElementRef;
  scrollStatus: boolean = false;
  sideNavOpen: boolean = false;
  selectedRoute: string;
  isMobile: boolean;
  navList = [
    { navName: "Mission", navRoute: "mission" },
    { navName: "Vision", navRoute: "vision" },
    { navName: "Goals", navRoute: "goals" },
    { navName: "Fit Founder", navRoute: "fitFounder" },
    { navName: "Careers", navRoute: "careers" },
  ];
  toggleDataEmit: ToggleStatusEmit = {
    toggleStatus: false,
    selectedPage: "",
  };
  constructor(private router: Router) {}

  ngOnInit() {
    this.selectedRoute = "mission";
    this.sideNavOpen = true;
    if (window.innerWidth < 768) {
      this.isMobile = true;
    }
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number > 100) {
      this.scrollStatus = true;
      this.header.nativeElement.classList.add("sticky");
      this.header.nativeElement.classList.add("top-to-bottom");
    } else {
      this.scrollStatus = false;
      this.header.nativeElement.classList.remove("sticky");
      this.header.nativeElement.classList.remove("top-to-bottom");
    }
  }

  // this function is to open and close the scrollPage in mobile and i-pad view
  navToggle(selectedPage?: string) {
    if (selectedPage) {
      this.selectedRoute = selectedPage;
      this.toggleDataEmit = {
        toggleStatus: false,
        selectedPage: this.selectedRoute,
      };
      this.toggleStatus.emit(this.toggleDataEmit);
    } else {
      this.selectedRoute = this.selectedRoute;
    }
    this.sideNavOpen = !this.sideNavOpen;
    if (this.sideNavOpen) {
      this.closeNav();
    } else {
      this.openNav();
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

  openNav() {
    document.getElementById("sideBar").style.width = this.isMobile
      ? "100%"
      : "30%";
  }

  closeNav() {
    document.getElementById("sideBar").style.width = "0";
  }

  navigateToHome() {
    this.router.navigateByUrl("/");
  }

  // this function is for scrollPage of pages
  scrollPage(selectedPage: string) {
    this.sideNavOpen = false; // this close the scrollPage bar for i-pad and mobile view.
    this.toggleDataEmit = {
      toggleStatus: false,
      selectedPage: selectedPage,
    };
    this.toggleStatus.emit(this.toggleDataEmit); // this emits the toggle status to parent component so that it can open or close the scrollPage accordingly.
  }
}
