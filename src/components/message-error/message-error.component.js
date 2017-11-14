'use strict';

import BaseComponent from 'base/base.component';

export default class MessageErrorComponent extends BaseComponent {
  constructor() {
    super();
    this.messages = [];
  }

  $onInit() {
    if (this.errors) {
      angular.forEach(this.errors, (value) => {
        if (value.hasOwnProperty(this.field)) {
          let errors = value[this.field];
          angular.forEach(errors, (error) => {
            this.messages.push(error);
          });
        }
      });
    }
  }
}
