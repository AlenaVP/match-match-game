import './best-score.scss';
import { BaseComponent } from '../base-component';
import { BestScoreInnerHTML } from './best-score-inner-HTML';

export class BestScore extends BaseComponent {
  constructor() {
    super('table', []);

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
}
