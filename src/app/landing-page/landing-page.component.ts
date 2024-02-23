import { Component} from '@angular/core';
import { PicturesOnlyComponent } from '../pictures-only/pictures-only.component';
import { Image } from '../interfaces/Image';
import { TextAndPictureComponent } from '../text-and-picture/text-and-picture.component';
import { Content } from '../interfaces/Content';
import { CommonModule } from '@angular/common'; 
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [PicturesOnlyComponent,TextAndPictureComponent, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  
  constructor(private titleService: Title) { }

  ngOnInit(){
    this.titleService.setTitle("CSB");
  }

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
 
    images = [ 
      { src: 'assets/picture1.jpg', alt: 'Image 1', active: true },
    { src: 'assets/picture2.jpg', alt: 'Image 2', active: false },
    { src: 'assets/picture3.jpg', alt: 'Image 3', active: false }
    ];
   



    prevSlide(): void { 
      const currIndex = this.images.findIndex(x => x.active == true) 
      this.images[currIndex].active = false;
      if(currIndex > 0)
      {
        this.images[currIndex-1].active = true;
      }
      else{
        this.images[this.images.length-1].active = true;
      }
      
    }
  
    nextSlide(): void { 
      const currIndex = this.images.findIndex(x => x.active == true) 
      this.images[currIndex].active = false;
      if(this.images.length-1 > currIndex){
        this.images[currIndex+1].active = true;
      }
      else{
        this.images[0].active = true;
      }

    }
}
