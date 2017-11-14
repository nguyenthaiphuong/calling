'use strict';

import langEn from 'i18n/en.json';
import langJa from 'i18n/ja.json';

class AppConfig {

  static $inject = ['$httpProvider', '$translateProvider', 'laddaProvider', 'toastrConfig', 'localStorageServiceProvider'];
  static instance;

  static getInstance($httpProvider, $translateProvider, laddaProvider, toastrConfig, localStorageServiceProvider) {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig($httpProvider, $translateProvider, laddaProvider, toastrConfig, localStorageServiceProvider);
    }
    return AppConfig.instance;
  }

  constructor($httpProvider, $translateProvider, laddaProvider, toastrConfig, localStorageServiceProvider) {
    $httpProvider.interceptors.push('HttpInterceptorService');
    laddaProvider.setOption({
      style: 'zoom-out'
    });
    localStorageServiceProvider.setDefaultToCookie(false);
    $translateProvider.translations('ja', langJa);
    $translateProvider.translations('en', langEn);
    $translateProvider.preferredLanguage('ja');
    $translateProvider.useSanitizeValueStrategy('escape');
    angular.extend(toastrConfig, {
      preventOpenDuplicates: true
    });
  }
}

export default angular.module(`${APP_NAME}.config`, []).config(AppConfig.getInstance).name;
