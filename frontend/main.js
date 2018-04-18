import './main.scss';

import './components/header/header';
import './components/sidebar/sidebar';

import './components/input/input';
import './components/serach-box/serach-box';

import { createAnchors } from './utils/add-anchors';

// Logos import
import '@jetbrains/logos/jetbrains/apple-mask-icon.svg';
import '@jetbrains/logos/jetbrains/jetbrains-simple.svg';
import '@jetbrains/logos/jetbrains/jetbrains-variant-4.svg';
require.context('@jetbrains/logos/jetbrains', false, /\.(png|ico)$/);

document.addEventListener("DOMContentLoaded", () => {
  createAnchors();
});
