'use strict';

import BaseService from 'base/base.service';

export default class AuthService extends BaseService {

  static $inject = ['$q', '$http'];

  constructor($q, $http) {
    super($http, $q);
  }

  login(data) {
    return this.post('auth/sign_in', data);
  }

  logout() {
    return this.get('admin/logout');
  }

  getCSRFToken() {
    return this.get('csrf-token');
  }
}
