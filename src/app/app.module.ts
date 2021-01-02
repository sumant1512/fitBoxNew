import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { AboutComponent } from "./about/about.component";
import { BannerComponent } from "./banner/banner.component";
import { WhyFitBoxComponent } from "./why-fit-box/why-fit-box.component";
import { FitFreedomComponent } from "./fit-freedom/fit-freedom.component";
import { FitFlowComponent } from "./fit-flow/fit-flow.component";
import { FitSmileComponent } from "./fit-smile/fit-smile.component";
import { FitTouchComponent } from "./fit-touch/fit-touch.component";
import { FitTouchMobileComponent } from "./fit-touch-mobile/fit-touch-mobile.component";
import { FitSmileMobileComponent } from "./fit-smile-mobile/fit-smile-mobile.component";
import { FitFlowMobileComponent } from "./fit-flow-mobile/fit-flow-mobile.component";
import { FitFreedomMobileComponent } from "./fit-freedom-mobile/fit-freedom-mobile.component";
import { FourReasonsToJoinComponent } from "./four-reasons-to-join/four-reasons-to-join.component";
import { FitBoxLogoComponent } from "./fit-box-logo/fit-box-logo.component";
import { FitBoxSolvingProblemsComponent } from "./fit-box-solving-problems/fit-box-solving-problems.component";
import { FitBoxCovidReadyComponent } from "./fit-box-covid-ready/fit-box-covid-ready.component";
import { FitMenuComponent } from "./fit-menu/fit-menu.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { FitBoxPlayStoreComponent } from "./fit-box-play-store/fit-box-play-store.component";
import { FaqsComponent } from "./faqs/faqs.component";
import { ContactComponent } from "./contact/contact.component";
import { HeaderComponent } from "./header/header.component";
import { CareerComponent } from "./career/career.component";
import { FitFounderComponent } from "./fit-founder/fit-founder.component";
import { FitFeaturesCarouselComponent } from "./fit-features-carousel/fit-features-carousel.component";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AboutComponent,
    BannerComponent,
    WhyFitBoxComponent,
    FitFreedomComponent,
    FitFlowComponent,
    FitSmileComponent,
    FitTouchComponent,
    FitTouchMobileComponent,
    FitSmileMobileComponent,
    FitFlowMobileComponent,
    FitFreedomMobileComponent,
    FourReasonsToJoinComponent,
    FitBoxLogoComponent,
    FitBoxSolvingProblemsComponent,
    FitBoxCovidReadyComponent,
    FitMenuComponent,
    TestimonialsComponent,
    GalleryComponent,
    FitBoxPlayStoreComponent,
    FaqsComponent,
    ContactComponent,
    HeaderComponent,
    CareerComponent,
    FitFounderComponent,
    FitFeaturesCarouselComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
