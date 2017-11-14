'use strict';

export default class DropdownMenuHoverDirective {

  static instance;

  static getInstance() {
    if (!DropdownMenuHoverDirective.instance) {
      DropdownMenuHoverDirective.instance = new DropdownMenuHoverDirective();
    }
    return DropdownMenuHoverDirective.instance;
  }

  constructor() {
    this.restrict = 'A';
  }

  link(scope, elem) {
    $(elem).dropdownHover();
  }
}
