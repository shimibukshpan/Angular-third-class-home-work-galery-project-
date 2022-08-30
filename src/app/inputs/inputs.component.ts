import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

  constructor() { }

  imagesArray : Card[] = [];


  ngOnInit(): void {
  }

    addImage(url:HTMLInputElement, name:HTMLInputElement){
    let imagurl = url.value;
    let imagName = name.value;
    

    this.imagesArray.push(new Card(imagName, imagurl));
    console.log(imagurl);
    console.log(imagName);
      console.log(this.imagesArray)
    name.value = "";
    url.value = "";

  }
}
