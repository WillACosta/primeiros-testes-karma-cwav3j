import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CardsTimeline } from './card.entity';
import { NgTimelineComponent } from './ng-timeline.component';
import { CARDSDEFAULTS } from './ng-timeline.const.TDD';

describe('NgTimelineComponent', () => {
  let component: NgTimelineComponent;
  let fixture: ComponentFixture<NgTimelineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgTimelineComponent]
    });

    fixture = TestBed.createComponent(NgTimelineComponent);
    component = fixture.componentInstance;

    const cards: CardsTimeline[] = CARDSDEFAULTS;

    component.listCards = cards;
  });

  it('Deve criar', () => {
    expect(component).toBeDefined();
  });
  /**
   * Verifica HTML
   */
  describe('Verifica conteúdo exibido no HTML', () => {
    it('Deve ter um título', () => {
      fixture.detectChanges();
      const de = fixture.debugElement.query(By.css('.timeline-title')).nativeElement;

      expect(de.innerText).toContain('Título');
    });

    it('Deve ter uma descrição', () => {
      fixture.detectChanges();
      const de = fixture.debugElement.query(By.css('p')).nativeElement;

      expect(de.innerText).toContain('Descrição');
    });
  });

  /**
   * Verifica CSS
   */
  describe('Verifica CSS`s', () => {
    it('Deve ter a classe `timeline`', () => {
      fixture.detectChanges();
      const el = fixture.debugElement.query(By.css('.timeline'));

      expect(el).toBeTruthy();
    });

    it('Deve ter a classe `right`', () => {
      fixture.detectChanges();
      const el = fixture.debugElement.query(By.css('.right'));

      expect(el).toBeTruthy();
    });

    it('Deve ter a classe `left`', () => {
      fixture.detectChanges();
      const el = fixture.debugElement.query(By.css('.left'));

      expect(el).toBeTruthy();
    });

    it('Deve ter uma classe que informa o tamanho', () => {
      fixture.detectChanges();
      const el = fixture.debugElement.query(By.css('.lg'));

      expect(el).toBeTruthy();
    });

    it('Deve ter uma classe que informa o ícone', () => {
      fixture.detectChanges();
      const el = fixture.debugElement.query(By.css('.acruxicon-articlemarketing'));

      expect(el).toBeTruthy();
    });

    it('Deve ter uma classe que informa o background do ícone', () => {
      fixture.detectChanges();
      const el = fixture.debugElement.query(By.css('.btn-info'));

      expect(el).toBeTruthy();
    });
  });

  /**
   * Verifica funções
   */
  describe('Verifica funções', () => {
    it('Deve chamar a `cardSelect()`', () => {
      fixture.detectChanges();
      // Precisa mudar para true, senao a funcao nao retorna nada
      component.cardClick = true;

      spyOn(component.onClickCard, 'emit');
      // trigger click
      const click = fixture.debugElement.query(By.css('.timeline-panel')).nativeElement;
      click.dispatchEvent(new Event('click'));

      expect(component.onClickCard.emit).toHaveBeenCalledWith(component.listCards[0]);
    });

    it('Deve chamar a `cardSelect()` com o cardClick falso', () => {
      fixture.detectChanges();

      expect(component.cardSelect(null, component.listCards[0])).toBeUndefined();
    });

    it('Deve chamar a `ngOnInit()` e dar um erro no console', () => {
      spyOn(console, 'error');
      // Forço um erro no console
      component.timelineSize = 'dasdsa';
      component.ngOnInit();
      fixture.detectChanges();

      expect(console.error).toHaveBeenCalledWith('Verifique se o atributo TimlineSize está dentro dos padrões!');
    });
  });
});
