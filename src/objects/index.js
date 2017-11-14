'use strict';

import { UserObject } from './user.object';

export default angular.module(`${APP_NAME}.objects`, [])
  .service('UserObject', UserObject);
