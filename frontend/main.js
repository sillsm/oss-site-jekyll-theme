import './main.scss';

import './components/header/header';
import './components/sidebar/sidebar';

import { createAnchors } from './utils/add-anchors';

document.addEventListener("DOMContentLoaded", () => {
  createAnchors();
});
