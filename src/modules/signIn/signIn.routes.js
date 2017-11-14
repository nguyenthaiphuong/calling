'use strict';

export default class SignInRoute {

  static $inject = ['$stateProvider'];
  static instance;

  static getInstance($stateProvider) {
    if (!SignInRoute.instance) {
      SignInRoute.instance = new SignInRoute($stateProvider);
    }
    return SignInRoute.instance;
  }

  constructor($stateProvider) {
    $stateProvider.state('signIn', {
      url: '/',
      templateUrl: 'modules/signIn/signIn.html',
      controller: 'SignInController',
      controllerAs: 'SignInCtrl',
      resolve: {
        isAuthenticated: (SecurityService, $location, PageService, $filter) => {
          PageService.setPageTitle($filter('translate')('sign_in'));
          if (SecurityService.isAuthenticated()) {
            $location.path('otlist');
          }
        }
      }
    });
  }
}
