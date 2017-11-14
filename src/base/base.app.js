'use strict';

import { PAGE_SHOW, PAGE_LIMIT } from 'configs/app.constant';

export default class BaseApp {
  constructor() {
    this.page = 1;
    this.limit = 10;
    this.offset = 0;
    this.total = 0;
    this.to = 0;
    this.from = 0;
    this.pageShow = PAGE_SHOW;
    this.pageSize = 10;
    this.totalPage = 0;
    this.loadingPage = false;
    this.isSubmit = false;
    this.regexAlphabetNumericAndSymbols = /^[a-zA-Z0-9~`!@#$%^&*()_+|\-=\\{}\\[\]:"";'<>?,./]*$/;
    this.regexZipCode = /^[0-9-]+$/;
    this.regexKana = /^([゠ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヷヸヹヺ・ーヽヾヿ]+)*$/u;
    this.regexFloatNumber = /^(?=.+)(?:[1-9]\d*|0)?(?:\.\d+)?$/;
    this.regexFloatWith2Decimals = /^(?:\d{1,8})?(?:\.\d{1,2})?$/;
    this.regexPhoneNumber = /^[0-9-+]+$/;
    this.regexNumeric = /^[0-9]+$/;
    this.regexVersion = /[0-9]+\.[0-9]+\.[0-9]+/;
    this.pageObject = {
      page: null,
      to: null,
      from: null,
      total: null,
      pageSize: null,
      totalPage: null
    };
  }

  clearMessageError() {
    this.messageErrors = null;
  }

  notification(title, message, type) {
    if (this.toastr) {
      switch (type) {
        case 'error':
          this.toastr.error(message, title);
          break;
        case 'success':
          this.toastr.success(message, title);
          break;
        default: break;
      }
    }
  }

  translate(key) {
    if (this.$filter) {
      return this.$filter('translate')(key);
    }
    return null;
  }

  openModal(config) {
    if (this.$uibModal) {
      this.$uibModal.open({
        animation: true,
        templateUrl: config.templateUrl,
        controller: config.controller,
        controllerAs: config.controller.replace('Controller', 'Ctrl'),
        backdrop: 'static',
        keyboard: false,
        size: config.size ? config.size : 'md',
        resolve: {
          modalData: () => {
            return config.data ? config.data : null;
          }
        }
      });
    }
  }

  getPagination(data) {
    return {
      page: data.current_page,
      to: data.to,
      from: data.from,
      total: data.total,
      pageSize: data.per_page,
      totalPage: data.last_page
    };
  }

  setPagination(data) {
    this.pageObject.page = this.page = data.current_page;
    this.pageObject.to = this.to = data.to;
    this.pageObject.from = this.from = data.from;
    this.pageObject.total = this.total = data.total;
    this.pageObject.totalPage = this.totalPage = data.last_page;
  }

  setPage(number) {
    let page = parseInt(number) || 0;
    this.page = Math.min(page, 1) >= 1 ? page : 1;
    this.offset = (this.page - 1) * this.pageSize;
  }

  setLimit(number) {
    let limit = parseInt(number) || PAGE_LIMIT;
    this.limit = Math.min(limit, 1) >= 1 ? limit : PAGE_LIMIT;
  }

  setTotal(number) {
    let total = parseInt(number) || 0;
    this.total = Math.min(total, 1) >= 1 ? total : 0;
  }
}
