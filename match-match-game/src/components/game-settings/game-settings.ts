import { BaseComponent } from '../base-component';
import './game-settings.scss';

export class GameSettings extends BaseComponent {
  constructor() {
    super('div', ['sheet']);
    this.changeHeaderForGameSettings();
    this.element.innerHTML = `
    <div class="sheet__label-box">
    <label for="category">Game cards</label>
  </div>
  <select id="category" name="category" form="settings">
    <option value="" selected disabled>select game cards type</option>
    <option value="animal">animal</option>
    <option value="car">car</option>
    <option value="food">food</option>
  </select>

  <div class="sheet__label-box">
    <label for="complexity">Difficulty</label>
  </div>
  <select id="complexity" name="complexity" form="settings">
    <option value="" selected disabled>select game type</option>
    <option value="low">4 x 4</option>
    <option value="mid">6 x 6</option>
    <option value="high">8 x 8</option>
  </select>
    `;
  }

  private async changeHeaderForGameSettings() {
    const header = document.querySelector('body > header');
    const navLinks = document.querySelectorAll('.nav__list__item > a');
    navLinks.forEach((a) => {
      if (a.classList.contains('active')) {
        a.classList.remove('active');
      }
    });
    const currentPage = document.getElementById('settings');
    currentPage?.classList.add('active');

    const headerRight = document.querySelector('.header-right');
    if (!headerRight) {
      throw Error('HeaderRight element not found');
    }
    headerRight.innerHTML = '';
    headerRight.innerHTML = `
    <form action="game.html" method="get" id="settings">
      <input type="submit" value="start game" class="btn game-btn">
    </form>
    <div class="ava-box"></div>
    `;
  }
}
