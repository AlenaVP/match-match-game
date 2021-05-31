import './style.scss';

import { createIndex } from './scripts/createIndex';
import { createAbout } from './scripts/createAbout';

import { registration } from './scripts/registration';

createIndex();

const pageIdx = 'about';
createAbout(false);

registration();
