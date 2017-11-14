'use strict';

import AuthService from './auth.service';
import SecurityService from './security.service';
import StoreService from './store.service';
import PageService from './page.service';
import HttpInterceptorService from './http-interceptor.service';

export default angular.module(`${APP_NAME}.services`, [])
  .service('AuthService', AuthService)
  .service('HttpInterceptorService', HttpInterceptorService.getInstance)
  .service('StoreService', StoreService)
  .service('PageService', PageService)
  .service('SecurityService', SecurityService).name;
