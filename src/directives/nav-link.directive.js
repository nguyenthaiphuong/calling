'use strict';

export default class NavLinkDirective {

  static instance;

  static getInstance() {
    if (!NavLinkDirective.instance) {
      NavLinkDirective.instance = new NavLinkDirective();
    }
    return NavLinkDirective.instance;
  }

  constructor() {
    this.restrict = 'E';
  }

  link(scope, elem, attrs) {
    if (attrs.ngClick || attrs.href === '' || attrs.href === '#') {
      elem.on('click', function(e) {
        e.preventDefault();
      });
    }
  }
}
