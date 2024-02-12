import { Component } from '@angular/core';
import { PicturesOnlyComponent } from '../pictures-only/pictures-only.component';
import { Image } from '../interfaces/Image';
import { TextAndPictureComponent } from '../text-and-picture/text-and-picture.component';
import { Content } from '../interfaces/Content';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [PicturesOnlyComponent,TextAndPictureComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent { 

  content : Content = {
    header : "HEADING SECTION",
    text : "lköasdjfkslöajfdö sadljf ljsajfd ölsajf ljasflöd jsölfjd saöljdföasljflsadjfölsajfdlöas jaölsjdf slöajdf slöajf dsdlöajf slöajdflsafj"
  };

  imageL : Image = {
  alt : "",
  link : "assets/picture1.jpg"
  };
  imageR : Image = {
    alt : "",
    link : "assets/picture2.jpg"
  };
  imageM : Image = {
    alt : "",
    link : "assets/picture3.jpg"
    };
}
