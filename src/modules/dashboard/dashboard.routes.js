'use strict';

export default class DashboardRoute {
  static instance;
  static getInstace($stateProvider) {
    if (!DashboardRoute.instance) {
      DashboardRoute.instance = new DashboardRoute($stateProvider);
    }
    return DashboardRoute.instance;
  }

  constructor($stateProvider) {
    $stateProvider.state('dashboard', {
      url: '/dashboard',
      templateUrl: 'modules/dashboard/dashboard.html',
      controller: 'DashboardController',
      controllerAs: 'DashboardCtrl'
    });
  }
}

