import './sidebar.scss';
import $ from 'jquery';
import Accordion from 'accordion/dist/common-js/accordion';

$(document).ready(() => {
  const el = document.querySelector(".accordion");


  new Accordion(el);
});
