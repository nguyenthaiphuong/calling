'use strict';

export default class PageService {

  static $inject = ['$rootScope'];

  constructor($rootScope) {
    this.$rootScope = $rootScope;
    this.subfix = ' | Calling';
  }

  setPageTitle(title) {
    if (title) {
      this.$rootScope.pageTitle = title + this.subfix;
    }
  }

  getPageTitle() {
    return this.$rootScope.pageTitle;
  }
}
