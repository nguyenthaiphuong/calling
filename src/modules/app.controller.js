'use strict';

class AppController {

  static $inject = ['$state', '$rootScope', '$scope', 'SecurityService', 'toastr', '$filter'];
  static instance;

  constructor($state, $rootScope, $scope, SecurityService, toastr, $filter) {
    this.$state = $state;
    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.SecurityService = SecurityService;
    this.toastr = toastr;
    this.$filter = $filter;
  }

  bodyClass() {
    switch (this.$state.current.name) {
      case 'signIn':
        return 'login';
      case 'forgotPassword':
      case 'resetPassword':
        return 'forgot';
      default:
        return 'page-header-fixed page-sidebar-closed-hide-logo page-container-bg-solid page-content-white';
    }
  }
}

export default angular.module(`${APP_NAME}.application`, []).controller('AppController', AppController).name;
