import './style.scss';

import { createIndex } from './scripts/createIndex';
import { createAbout } from './scripts/createAbout';

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
    main.innerHTML = '';
    createAbout();
    registration();
  });

  scorePage.addEventListener('click', (e: any) => {
    e.preventDefault();
  });

  settingsPage.addEventListener('click', (e: any) => {
    e.preventDefault();
    const main: any = document.getElementById('main');
    main.innerHTML = '';
    startGame();
  });
};
