'use strict';

import DashboardController from './dashboard.controller';
import DashboardRoute from './dashboard.routes';

export default angular.module(`${APP_NAME}.dashboard`, [])
  .config(DashboardRoute.getInstace)
  .controller('DashboardController', DashboardController).name;
