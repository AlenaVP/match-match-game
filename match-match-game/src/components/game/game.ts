import { BaseComponent } from '../base-component';
import { Timer } from '../timer/timer';
import { Field } from '../field/field';
import { Card } from '../card/card';

import { delay } from '../../shared/delay';

const FLIP_DELAY = 300;

export class Game extends BaseComponent {
  private readonly timer: Timer;

  private readonly field: Field;

  private activeCard?: Card;

  private isAnimation = false;

  private score: number;

  private gameTime: number;

  private isGameStopped = false;

  constructor() {
    super();
    this.timer = new Timer();
    this.element.appendChild(this.timer.element);
    this.field = new Field();
    this.element.appendChild(this.field.element);
    this.score = 0;
    this.gameTime = 0;
  }

  newGame(images: string[]) {
    this.field.clear();
    this.score = 0;
    const cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);

    cards.forEach((card) => {
      card.element.addEventListener('click', () => this.cardHandler(card));
    });

    this.field.addCards(cards);
    this.stopwatch();
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
      this.score++;

      if (this.isComplete()) {
        this.stopGame();
      }
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

  private stopwatch() {
    let countdown = true;
    let tic = 30;
    this.drawTimer(tic--);

    let timerId = setInterval(() => {
      if (countdown) {
        this.drawTimer(tic);
        if (tic === 0) {
          countdown = false;
        } else {
          tic--;
        }
      } else {
        if (this.isGameStopped) {
          clearInterval(timerId);
        } else {
          tic++;
        }
        this.gameTime = tic;
        this.drawTimer(tic);
      }
    }, 1000);
    setTimeout(() => clearInterval(timerId), 3605000);
  }

  private drawTimer(tic: number) {
    const m = Math.floor(tic / 60);
    const min = m > 9 ? `${m}` : `0${m}`;
    const s = tic % 60;
    const sec = s > 9 ? s : `0${s}`;
    this.timer.element.innerText = `${min}:${sec}`;
}

  private isComplete(): boolean {
    const goodResultCards = document.querySelectorAll('.card__good-result');
    const cardContainers = document.querySelectorAll('.card-container');
    return goodResultCards.length === cardContainers.length;
  }

  private stopGame(): void {
    this.isGameStopped = true;
    const gameResult = this.score * 100 - this.gameTime * 10;
    alert(`Your score = ${gameResult > 0 ? gameResult : 0}`);
  }
}
