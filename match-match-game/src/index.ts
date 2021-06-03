import './style.scss';

import { createIndex } from './scripts/createIndex';
import { createAbout } from './scripts/createAbout';
import { BestScore } from './components/best-score/best-score';

import { startGame } from './scripts/startGame';

import { registration } from './scripts/registration';

window.onload = () => {
  createIndex();
  createAbout();
  registration();

  const aboutPage: any = document.getElementById('about');
  const scorePage: any = document.getElementById('score');
  const settingsPage: any = document.getElementById('settings');

  aboutPage.addEventListener('click', (e: any) => {
    e.preventDefault();
    const main: any = document.getElementById('main');
    if (!main) {
      throw Error('Root element not found');
    }
    main.innerHTML = '';
    createAbout();
    registration();
  });

  scorePage.addEventListener('click', (e: any) => {
    e.preventDefault();
    const main = document.getElementById('main');
    if (!main) {
      throw Error('Root element not found');
    }
    main.innerHTML = '';
    main.appendChild(new BestScore().element);
  });

  settingsPage.addEventListener('click', (e: any) => {
    e.preventDefault();
    const main: any = document.getElementById('main');
    if (!main) {
      throw Error('Root element not found');
    }
    main.innerHTML = '';
    startGame();
  });
};
