import { Component } from '@angular/core';
import { ItemCardComponent } from '../item-card/item-card.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-our-products',
  standalone: true,
  imports: [ItemCardComponent],
  templateUrl: './our-products.component.html',
  styleUrl: './our-products.component.scss'
})
export class OurProductsComponent {
  constructor(private titleService: Title) { }

  ngOnInit(){
    this.titleService.setTitle("Products");
  }
}
