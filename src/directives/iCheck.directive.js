'use strict';

export default class iCheckDirective {

  static $inject = ['$timeout', '$parse'];
  static instance;

  static getInstance($timeout, $parse) {
    if (!iCheckDirective.instance) {
      iCheckDirective.instance = new iCheckDirective($timeout, $parse);
    }
    return iCheckDirective.instance;
  }

  constructor($timeout, $parse) {
    this.$timeout = $timeout;
    this.$parse = $parse;
    this.require = 'ngModel';
    this.restrict = 'A';
  }

  link($scope, element, $attrs, ngModel) {
    return this.$timeout(() => {
      let value = $attrs.value;
      let $element = $(element);

      if ($element.attr('type') === 'checkbox') {
        $element.iCheck({
          checkboxClass: 'icheckbox_minimal-blue',
          radioClass: 'iradio_minimal-blue'
        });
      } else {
        $element.iCheck({
          checkboxClass: 'icheckbox_flat-green',
          radioClass: 'iradio_flat-green'
        });
      }

      $scope.$watch($attrs.ngModel, () => {
        $element.iCheck('update');
      });

      $element.on('ifChanged', function(event) {
        if ($element.attr('type') === 'checkbox' && $attrs.ngModel) {
          $scope.$apply(() => {
            ngModel.$setViewValue(event.target.checked);
          });
        }
        if ($element.attr('type') === 'radio' && $attrs.ngModel) {
          $scope.$apply(() => {
            ngModel.$setViewValue(value);
          });
        }
      });
    }, 0);
  }
}
