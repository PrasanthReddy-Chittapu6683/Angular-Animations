import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FadeInComponent } from './fade-in/fade-in.component';
import { FadeOutComponent } from './fade-out/fade-out.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { SlideAnimationComponent } from './slide-animation/slide-animation.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'open-close', component: OpenCloseComponent, data: { animation: 'FilterPage' } },
  { path: 'Fade-In', component: FadeInComponent, data: { animation: 'FilterPage' } },
  { path: 'Fade-Out', component: FadeOutComponent, data: { animation: 'FilterPage' } },
  { path: 'Slide-Animations', component: SlideAnimationComponent, data: { animation: 'AboutPage' } },
  { path: 'welcome', component: WelcomepageComponent, data: { animation: 'HomePage' } },
  { path: '**', component: WelcomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
