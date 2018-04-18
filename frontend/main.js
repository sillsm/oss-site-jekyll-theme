// Base
import './components/core/reset.scss';
import './components/core/core.scss';

// External
import 'github-markdown-css/github-markdown.css';
import 'pygments-css/github.css';

// Layout
import './components/layout/layout.scss';
import './components/header/header';
import './components/footer/footer.scss';
import './components/sidebar/sidebar';
import './components/full-screen-navigation/full-screen-navigation.scss';

// Components
import './components/input/input';
import './components/serach-box/serach-box';
import './components/logos/logos';

import './main.scss';

import { createAnchors } from './utils/add-anchors';

document.addEventListener("DOMContentLoaded", () => {
  createAnchors();
});
