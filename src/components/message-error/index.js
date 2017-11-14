'use strict';

import MessageErrorComponent from './message-error.component';

let options = {
  bindings: {
    errors: '=',
    field: '@'
  },
  templateUrl: 'components/message-error/message-error.component.html',
  controller: MessageErrorComponent
};

export default options;
