import './style.scss';
import { App } from './app';

import { createIndex } from './scripts/createIndex';
import { createAbout } from './scripts/createAbout';

import { registration } from './scripts/registration';

window.onload = () => {
  new App(document.body);
}

createIndex();

const pageIdx = 'about';
createAbout(false);

registration();
