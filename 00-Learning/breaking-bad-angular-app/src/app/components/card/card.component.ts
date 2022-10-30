import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/Character';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() character: Character | null = null;


  constructor() { }


}
