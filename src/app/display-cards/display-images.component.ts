import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-display-cards',
  templateUrl: './display-images.component.html',
  styleUrls: ['./display-images.component.css']
})
export class DisplayImagesComponent implements OnInit {

  constructor() { }
  
  @Input()cardsArray :Card[]=[]

  ngOnInit(): void {
  }

}
