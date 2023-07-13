import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { BounceComponent } from './pages/bounce/bounce.component';
import { GradientComponent } from './pages/gradient/gradient.component';
import { AnimationComponent } from './pages/animation/animation.component';
import { JavascriptComponent } from './pages/javascript/javascript.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:"about",component:AboutComponent
  },
  {
    path:"contact",component:ContactComponent
  },
  {
    path:"services",component:ServicesComponent
  },
  {
    path:"bounce",component:BounceComponent
  },
  {
    path:"gradient",component:GradientComponent
  },
  
  {
    path:"animation",component:AnimationComponent
  },
{
    path:"javascript",component:JavascriptComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
