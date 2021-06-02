import './card.scss';
import { BaseComponent } from "../base-component";

const FLIP_CLASS = 'flipped';

export class Card extends BaseComponent {

  constructor(readonly image: string) {
    super('div', ['card-container']);
    this.element.innerHTML = `
    <div class="card">
      <div class="card__face" style="background-image: url('./images/${image}')"></div>
      <div class="card__back"></div>
    </div>
    `;
  }

  flipToBack() {
    return this.flip(true);
  }

  flipToFace() {
    return this.flip();
  }

  private flip(isFace = false): Promise<void> {
    return new Promise((resolve) => {
      this.element.classList.toggle(FLIP_CLASS, !isFace);
      this.element.addEventListener('transitionend', () => resolve, {
        once: true,
      });
    });
  }

}
