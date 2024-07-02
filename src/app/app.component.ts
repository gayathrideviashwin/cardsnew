import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CardComponent,NgFor]
})
export class AppComponent {
  post = [
    {
      title : "Nature",
      imageUrl:'tree.jpeg',
      username : '@nature',
      content : 'I saw this tree today'
    },
    {
      title : "Snowy mountain",
      imageUrl:'mountain.jpeg',
      username : '@mountainlover',
      content : 'Here is the picture of snowy mountain'
    },
    {
      title : "biking",
      imageUrl:'biking.jpeg',
      username : '@biking133',
      content : 'I did some biking today'
    },
    {
      title : "Nature",
      imageUrl:'tree.jpeg',
      username : '@nature',
      content : 'I saw this tree today'
    }
  ]
}
