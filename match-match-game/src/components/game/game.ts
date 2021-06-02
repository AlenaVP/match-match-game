import { BaseComponent } from "../base-component";
import { Field } from "../field/field";
import { Card } from "../card/card";

import { delay } from "../../shared/delay";

const FLIP_DELAY = 300;

export class Game extends BaseComponent {
  private readonly field: Field;

  private activeCard?: Card;

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
    await card.flipToFace();

    if (!this.activeCard) {
      this.activeCard = card;
      return;
    }

    if (this.activeCard.image != card.image) {
      await delay(FLIP_DELAY);
      this.activeCard.flipToBack();
      await card.flipToBack();
    }

    this.activeCard = undefined;
  }
}
