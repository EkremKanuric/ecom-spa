import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButton, MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss'
})
export class ItemCardComponent {

}
