import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { FitCardComponent } from './fit-card/fit-card.component';
import { WhyFitBoxComponent } from './why-fit-box/why-fit-box.component';
import { FitFreedomComponent } from './fit-freedom/fit-freedom.component';
import { FitFlowComponent } from './fit-flow/fit-flow.component';
import { ReasonsToJoinFitBoxComponent } from './reasons-to-join-fit-box/reasons-to-join-fit-box.component';
import { FitSmileComponent } from './fit-smile/fit-smile.component';
import { FitTouchComponent } from './fit-touch/fit-touch.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AboutComponent,
    BannerComponent,
    FitCardComponent,
    WhyFitBoxComponent,
    FitFreedomComponent,
    FitFlowComponent,
    ReasonsToJoinFitBoxComponent,
    FitSmileComponent,
    FitTouchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
