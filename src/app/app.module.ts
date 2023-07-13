import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { HeaderComponent } from './common/header/header.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { BounceComponent } from './pages/bounce/bounce.component';
import { GradientComponent } from './pages/gradient/gradient.component';
import { AnimationComponent } from './pages/animation/animation.component';
import { JavascriptComponent } from './pages/javascript/javascript.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    ContactComponent,
    ServicesComponent,
    BounceComponent,
    GradientComponent,
    AnimationComponent,
    JavascriptComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
