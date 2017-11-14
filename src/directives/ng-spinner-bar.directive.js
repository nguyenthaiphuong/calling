'use strict';

export default class NgSpinnerBarDirective {

  static $inject = ['$rootScope'];
  static instance;

  static getInstance($rootScope) {
    if (!NgSpinnerBarDirective.instance) {
      NgSpinnerBarDirective.instance = new NgSpinnerBarDirective($rootScope);
    }
    return NgSpinnerBarDirective.instance;
  }

  constructor($rootScope) {
    this.restrict = 'A';
    this.$rootScope = $rootScope;
  }

  link(scope, element) {
    element.addClass('hide');

    this.$rootScope.$on('$stateChangeStart', () => {
      element.removeClass('hide');
    });

    this.$rootScope.$on('$stateChangeSuccess', () => {
      element.addClass('hide');
      $('body').removeClass('page-on-load');
    });

    this.$rootScope.$on('$stateNotFound', () => {
      element.addClass('hide');
    });

    this.$rootScope.$on('$stateChangeError', () => {
      element.addClass('hide');
    });
  }
}
