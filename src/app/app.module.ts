import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputsComponent } from './inputs/inputs.component';
import { DisplayImagesComponent } from './display-cards/display-images.component';
import { CardComponent } from './card/card.component';
import { StarsComponent } from './stars/stars.component';

@NgModule({
  declarations: [
    AppComponent,
    InputsComponent,
    DisplayImagesComponent,
    CardComponent,
    StarsComponent

  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
