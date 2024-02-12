import { Component, Input } from '@angular/core'; 
import { Image } from '../interfaces/Image';

@Component({
  selector: 'app-pictures-only',
  standalone: true,
  imports: [],
  templateUrl: './pictures-only.component.html',
  styleUrl: './pictures-only.component.scss'
})
export class PicturesOnlyComponent {
  @Input() imageLeft!: Image;
  @Input() imageMiddle!: Image;
  @Input() imageRight!: Image;

}
