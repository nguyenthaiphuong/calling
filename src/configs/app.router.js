'use strict';

class AppRouter {

  static $inject = ['$urlRouterProvider', '$locationProvider'];
  static instance;

  static getInstance($urlRouterProvider, $locationProvider) {
    if (!AppRouter.instance) {
      AppRouter.instance = new AppRouter($urlRouterProvider, $locationProvider);
    }
    return AppRouter.instance;
  }

  constructor($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise(($injector, $location) => {
      const SecurityService = $injector.get('SecurityService');
      if (SecurityService.isAuthenticated()) {
        $location.path('/redirect-url/404');
      } else {
        $location.path('/');
      }
    });
  }
}

export default angular.module(`${APP_NAME}.router`, []).config(AppRouter.getInstance).name;
