'use strict';

export default class OtListRoute {

  static $inject = ['$stateProvider'];
  static instance;

  static getInstance($stateProvider) {
    if (!OtListRoute.instance) {
      OtListRoute.instance = new OtListRoute($stateProvider);
    }
    return OtListRoute.instance;
  }

  constructor($stateProvider) {
    $stateProvider.state('otlist', {
      url: '/otlist',
      templateUrl: 'modules/otList/otList.html',
      controller: 'OtListController',
      controllerAs: 'otlCtrol',
      resolve: {
        isAuthenticated: (SecurityService, $location, PageService, $filter) => {
          PageService.setPageTitle($filter('translate')('sign_in'));
          if (SecurityService.isAuthenticated()) {
            $location.path('signIn');
          }
        }
      }
    });
  }
}
