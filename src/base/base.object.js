'use strict';

export default class BaseObject {
  constructor(object) {
    this.data = object ? object : {};
  }

  set(key, value) {
    this.data[key] = value;
  }

  get(key) {
    if (this.data[key]) {
      return this.data[key];
    }
    return null;
  }

  setId(id) {
    this.set('id', id);
  }

  getId() {
    return this.get('id');
  }

  setData(data) {
    this.data = data ? data : {};
  }

  getData() {
    return this.data;
  }

  call(method) {
    let args = Array.prototype.slice.call(arguments, 1);
    if (typeof this[method] !== 'function' || !this[method]) {
      return null;
    }
    return this[method].apply(this, args);
  }
}
