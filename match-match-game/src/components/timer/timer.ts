import './timer.scss';
import { BaseComponent } from '../base-component';

export class Timer extends BaseComponent {
  time: number;

  constructor() {
    super('div', ['timer']);
    this.time = 10;
  }
}
