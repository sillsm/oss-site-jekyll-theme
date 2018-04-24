import './sidebar.scss';
import $ from 'jquery';

class Collapse {
  constructor(elem) {
    this.$collapse = $(elem);
    this.$button = this.$collapse.find('> .js-toggle-collapse-button');
    this.$content = this.$collapse.find('> .js-collapse-content');

    this.$innerActiveNodes = this.$content.find('.sidebar-tree > ._is-open');

    if (this.$innerActiveNodes.length > 0) {
      this.open();
    }

    this.$button.on('click', () => {
      this.toggle();
    });
  }

  open() {
    if (!this.$collapse.hasClass('_is-open')) {
      this.$collapse.addClass('_is-open')
    }
  }

  close() {
    if (this.$collapse.hasClass('_is-open')) {
      this.$collapse.removeClass('_is-open')
    }
  }

  toggle() {
    if (!this.$collapse.hasClass('_is-open')) {
      this.open()
    } else {
      this.close()
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  $('.js-collapse').each((i, e) => {
    new Collapse(e);
  });
});
