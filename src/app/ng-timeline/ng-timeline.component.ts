import { CardsTimeline } from './card.entity';
import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'ng-timeline',
  templateUrl: './ng-timeline.component.html',
  styleUrls: [ './ng-timeline.component.css' ]
})
export class NgTimelineComponent implements OnInit {

  // Recebe a lista de cards
  @Input() listCards: CardsTimeline[];

  // Tamanho da timeline
  @Input() timelineSize: string = 'lg';

  // Indica se o card é clicavel ou não
  @Input() cardClick: boolean = false;

  // Click no card
  @Output() onClickCard: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  // Verifica se os atributos estão dentro dos padrões
  ngOnInit() {
    // TimelineSize
    if (['lg', 'md', 'sm'].indexOf(this.timelineSize) > -1) {

    } else { console.error('Verifique se o atributo TimlineSize está dentro dos padrões!'); }
  }

  // Click no card
  cardSelect(e, item) {
    if (this.cardClick) { return this.onClickCard.emit(item); }
  }
}
