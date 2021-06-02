import './style.scss';
import { App } from './app';

import { createIndex } from './scripts/createIndex';

window.onload = () => {
  const appElement = document.getElementById('main');

  if (!appElement) {
    throw Error('App root element not found');
  }

  new App(appElement).start();
}

createIndex();
