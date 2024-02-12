import { Component,Input, input } from '@angular/core';
import { Image } from '../interfaces/Image';
import { Content } from '../interfaces/Content';

@Component({
  selector: 'app-text-and-picture',
  standalone: true,
  imports: [],
  templateUrl: './text-and-picture.component.html',
  styleUrl: './text-and-picture.component.scss'
})
export class TextAndPictureComponent {
  @Input() content! :Content;
  @Input() image! : Image;
  @Input() textFirst : any;
  
}
