import { BaseComponent } from '../base-component';
import { Field } from '../field/field';
import { Card } from '../card/card';

import { delay } from '../../shared/delay';

const FLIP_DELAY = 300;

export class Game extends BaseComponent {
  private readonly field: Field;

  private activeCard?: Card;

  private isAnimation = false;

  constructor() {
    super();
    this.field = new Field();
    this.element.appendChild(this.field.element);
  }

  newGame(images: string[]) {
    this.field.clear();
    const cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);

    cards.forEach((card) => {
      card.element.addEventListener('click', () => this.cardHandler(card));
    });

    this.field.addCards(cards);
  }

  private async cardHandler(card: Card) {
    if (this.isAnimation || !card.isFlipped) {
      return;
    }
    this.isAnimation = true;

    await card.flipToFace();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image !== card.image) {
      this.applyFilter(this.activeCard.element, card.element, true);

      await delay(FLIP_DELAY);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);

      document.getElementById('bad')?.remove();
      document.getElementById('bad-too')?.remove();
    } else {
      this.applyFilter(this.activeCard.element, card.element, false);
    }

    this.activeCard = undefined;
    this.isAnimation = false;
  }

  private applyFilter(activeElement: Element, cardElement: Element, isBad: boolean): void {
    const divClass = isBad ? 'card__bad-result' : 'card__good-result';

    let filter = new BaseComponent('div', [divClass]);
    filter.element.id = isBad ? 'bad' : '';
    activeElement.firstElementChild?.appendChild(filter.element);

    filter = new BaseComponent('div', [divClass]);
    filter.element.id = isBad ? 'bad-too' : '';
    cardElement.firstElementChild?.appendChild(filter.element);
  }
}
