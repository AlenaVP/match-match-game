import './style.scss';
import { App } from './app';

import { createIndex } from './scripts/createIndex';
import { createAbout } from './scripts/createAbout';

import { registration } from './scripts/registration';

window.onload = () => {
  const appElement = document.getElementById('main');

  if (!appElement) {
    throw Error('App root element not found');
  }

  new App(appElement);
}

createIndex();

// const pageIdx = 'about';
// createAbout(false);

// registration();
