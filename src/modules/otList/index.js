'use strict';

import OtListController from './otList.controller';
import OtListRoute from './otList.routes';

export default angular.module(`${APP_NAME}.OtList`, [])
  .config(OtListRoute.getInstance)
  .controller('OtListController', OtListController).name;
