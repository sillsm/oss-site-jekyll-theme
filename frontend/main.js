import './main.scss';

import './components/header/header';
import './components/sidebar/sidebar';

import './components/input/input';
import './components/serach-box/serach-box';

import { createAnchors } from './utils/add-anchors';

document.addEventListener("DOMContentLoaded", () => {
  createAnchors();
});
