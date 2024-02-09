import { Component } from '@angular/core';
import { PicturesOnlyComponent } from '../pictures-only/pictures-only.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [PicturesOnlyComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent { 


}
