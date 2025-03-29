import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: AppComponent } 
  ];



const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled', // Enable anchor scrolling
    scrollPositionRestoration: 'enabled', // Restore scroll position when navigating back
  };