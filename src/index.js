'use strict';

import angular from 'angular';
import 'angular-toastr/dist/angular-toastr.min.css';
import 'datatables/media/css/jquery.dataTables.min.css';
import 'ladda/dist/ladda-themeless.min.css';
import 'icheck/skins/all.css';
import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css';
import 'styles/main.scss';

import 'angular-ui-router';
import 'angular-cookies';
import 'angular-sanitize';
import 'angular-translate';
import 'ladda';
import 'angular-ui-bootstrap';
import 'ng-file-upload';
import 'angular-ladda';
import 'angular-filter';
import 'angular-toastr';
import 'angular-local-storage';
import 'icheck';
import 'bootstrap';
import 'bootstrap-hover-dropdown';
import 'angular-bootstrap-confirm';
import 'datatables';
import 'eonasdan-bootstrap-datetimepicker';
import 'common';
import 'configs/app.router';
import 'configs/app.config';
import 'configs/app.run';
import 'services';
import 'directives';
import 'components';
import 'modules';
import 'objects';

angular.module(APP_NAME, [
  'ui.router',
  'ngCookies',
  'ngSanitize',
  'LocalStorageModule',
  'ui.bootstrap',
  'angular-ladda',
  'mwl.confirm',
  'pascalprecht.translate',
  'toastr',
  'ngFileUpload',
  'angular.filter',
  `${APP_NAME}.router`,
  `${APP_NAME}.run`,
  `${APP_NAME}.config`,
  `${APP_NAME}.templates`,
  `${APP_NAME}.services`,
  `${APP_NAME}.directives`,
  `${APP_NAME}.components`,
  `${APP_NAME}.modules`,
  `${APP_NAME}.objects`
]);
