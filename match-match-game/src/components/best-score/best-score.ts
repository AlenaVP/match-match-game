import './best-score.scss';
import { BaseComponent } from '../base-component';
import { BestScoreInnerHTML } from './best-score-inner-HTML';

export class BestScore extends BaseComponent {
  constructor() {
    super('table', []);

    this.changeHeaderForBestScore();

    const innerHeadline = `
    <caption>Best players</caption>
      <tr class="headline">
        <th></th>
        <th></th>
        <th></th>
      </tr>
    `;
    const bestScoreInnerHTML = new BestScoreInnerHTML().trs;
    this.element.innerHTML = innerHeadline.concat(bestScoreInnerHTML);
  }

  private async changeHeaderForBestScore() {
    const navLinks = document.querySelectorAll('.nav__list__item > a');
    navLinks.forEach((a) => {
      if (a.classList.contains('active')) {
        a.classList.remove('active');
      }
    });
    const currentPage = document.getElementById('score');
    currentPage?.classList.add('active');

    const headerRight = document.querySelector('.header-right');
    if (!headerRight) {
      throw Error('HeaderRight element not found');
    }
    headerRight.innerHTML = '';
    headerRight.innerHTML = `
    <button type="button" class="btn stop-game-btn">stop game</button>
    <div class="ava-box"></div>
    `;
  }
}
