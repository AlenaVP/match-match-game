import './style.scss';

import {createIndex} from './scripts/createIndex';
import {createAbout} from './scripts/createAbout';

createIndex();

let pageIdx = 'about';
createAbout(false);
