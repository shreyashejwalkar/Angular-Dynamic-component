import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { HeroJobComponent } from './hero-job/hero-job.component';
import { AdService } from './ad.service';
import { AdBannerComponent } from './ad-banner.component';
import { AdDirective } from './ad.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroProfileComponent,
    HeroJobComponent,
    AdBannerComponent,
    AdDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [AdService],
  entryComponents: [ HeroJobComponent, HeroProfileComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
