'use strict';

import { UserObject } from 'objects';

class Application {

  static $inject = ['$translate', '$rootScope', '$anchorScroll', '$location', '$state', 'StoreService', 'SecurityService'];
  static instance;

  static getInstance($translate, $rootScope, $anchorScroll, $location, $state, StoreService, SecurityService) {
    if (!Application.instance) {
      Application.instance = new Application($translate, $rootScope, $anchorScroll, $location, $state, StoreService, SecurityService);
    }
    return Application.instance;
  }

  constructor($translate, $rootScope, $anchorScroll, $location, $state, StoreService, SecurityService) {
    const currentLanguage = angular.getCurrentLanguage(StoreService.get('currentLanguage'));
    const deRegisterInterceptor = $rootScope.$on('$stateChangeStart', (event, toState, toParams) => {
      $anchorScroll('scroll-top');
      if (SecurityService.isAuthenticated()) {
        const userInfo = new UserObject(SecurityService.getUserInfo());
        event.preventDefault();
        deRegisterInterceptor();
        if (userInfo.isOperatorAdmin()) {
          return $state.transitionTo('company.list', toParams);
        }
        return $state.transitionTo(toState.name, toParams);
      }
      return null;
    });
    $translate.use(currentLanguage);
  }
}

export default angular.module(`${APP_NAME}.run`, []).run(Application.getInstance).name;
