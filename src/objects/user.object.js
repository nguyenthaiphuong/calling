'use strict';

import BaseObject from 'base/base.object';

export class UserObject extends BaseObject {
  constructor(object) {
    super(object);
  }

  getTypeUser() {
    return super.get('type_user');
  }

  getRole() {
    return super.get('role');
  }

  isCallingAdmin() {
    return this.getTypeUser().id === 1;
  }

  isSystemAdmin() {
    return this.isCallingAdmin() && this.getRole() === 1;
  }

  isOperatorAdmin() {
    return this.isCallingAdmin() && this.getRole() === 2;
  }
}
