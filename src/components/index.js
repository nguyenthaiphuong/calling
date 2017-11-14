'use strict';

import MessageErrorComponent from './message-error';

export default angular.module(`${APP_NAME}.components`, [])
  .component('messageErrorComponent', MessageErrorComponent).name;
