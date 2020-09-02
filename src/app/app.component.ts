import { Component } from '@angular/core';
import { NgTimelineComponent } from './ng-timeline/ng-timeline.component';
import { CardsTimeline } from './ng-timeline/card.entity';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Primeiro teste com Karma';

    timelineList: CardsTimeline[]  = [
    {
      cardTitle: "Primeiro",
      cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien mi, commodo sit amet purus at.",
      cardSide: "left",
      btnIcon: "acruxicon-articlemarketing",
      btnColor: "btn-info"
    },
    {
      cardTitle: "Segundo",
      cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien mi, commodo sit amet purus at.",
      cardSide: "right",
      btnIcon: "acruxicon-add-location",
      btnColor: "btn-success"
    },
    {
      cardTitle: "Terceiro",
      cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien mi, commodo sit amet purus at.",
      cardSide: "left",
      btnIcon: "iconic iconic-social-instagram",
      btnColor: "btn-warning"
    },
    {
      cardTitle: "Quarto",
      cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien mi, commodo sit amet purus at.",
      cardSide: "right",
      btnIcon: "acruxicon-add-location",
      btnColor: "btn-primary"
    }
  ];

    testeClickCardTimeline(e) {
    console.log(e);
  }
}
