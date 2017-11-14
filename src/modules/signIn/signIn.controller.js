'use strict';

import BaseController from 'base/base.controller';

export default class SignInController extends BaseController {

  static $inject = ['$state', '$filter', '$translate', 'AuthService', 'SecurityService', 'StoreService', 'toastr'];

  constructor($state, $filter, $translate, AuthService, SecurityService, StoreService, toastr) {
    super();
    this.formData = {};
    this.$state = $state;
    this.$filter = $filter;
    this.$translate = $translate;
    this.AuthService = AuthService;
    this.SecurityService = SecurityService;
    this.StoreService = StoreService;
    this.toastr = toastr;
  }

  login() {
    this.AuthService.login(this.formData)
      .then((response) => {
        if (response.code === '200') {
          this.$state.go('dashboard');
          this.notification('', response.message, 'success');
        } else {
          this.notification('', response.message, 'error');
        }
      }).catch((error) => {
        this.notification('', error.message, 'error');
      });
  }
}

