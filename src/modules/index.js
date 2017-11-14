'use strict';

import './signIn';
import './otList';
import './app.controller';
import './dashboard';

angular.module(`${APP_NAME}.modules`, [
  `${APP_NAME}.signin`,
  `${APP_NAME}.OtList`,
  `${APP_NAME}.dashboard`,
  `${APP_NAME}.application`
]);

