import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OurProductsComponent } from './our-products/our-products.component';


export const routes: Routes = [
     {path: '', redirectTo: 'home', pathMatch: 'full'},
     {path: 'home', component: LandingPageComponent },
     {path: 'services', component: OurServicesComponent },
     {path: 'about-us', component: AboutUsComponent },
     {path: 'contact-us', component: ContactUsComponent },
     {path: 'products', component: OurProductsComponent },];
