import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FadeOutComponent } from './fade-out/fade-out.component';
import { FadeInComponent } from './fade-in/fade-in.component';
import { SlideAnimationComponent } from './slide-animation/slide-animation.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';


@NgModule({
  declarations: [
    AppComponent,
    FadeOutComponent,
    FadeInComponent,
    SlideAnimationComponent,
    OpenCloseComponent,
    WelcomepageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
