import { Component } from '@angular/core';
import { ItemCardComponent } from '../item-card/item-card.component';

@Component({
  selector: 'app-our-products',
  standalone: true,
  imports: [ItemCardComponent],
  templateUrl: './our-products.component.html',
  styleUrl: './our-products.component.scss'
})
export class OurProductsComponent {

}
