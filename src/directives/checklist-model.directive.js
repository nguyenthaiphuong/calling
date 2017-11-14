'use strict';

export default class ChecklistModelDirective {

  static $inject = ['$parse', '$compile'];
  static instance;

  static getInstance($parse, $compile) {
    if (!ChecklistModelDirective.instance) {
      ChecklistModelDirective.instance = new ChecklistModelDirective($parse, $compile);
    }
    return ChecklistModelDirective.instance;
  }

  constructor($parse, $compile) {
    this.restrict = 'A';
    this.priority = 1000;
    this.terminal = true;
    this.scope = true;
    this.$parse = $parse;
    this.$compile = $compile;
  }

  compile(tElement) {
    tElement.removeAttr('checklist-model');
    tElement.attr('ng-model', 'checked');
    return {
      post: function postLink(scope, elem, attrs) {
        this.$compile(elem)(scope);
        let getter = this.$parse(attrs.checklistModel);
        let setter = getter.assign;
        let value = this.$parse(attrs.checklistValue)(scope.$parent);

        scope.$watch('checked', function(newValue, oldValue) {
          if (newValue === oldValue) {
            return;
          }
          let current = getter(scope.$parent);
          if (newValue === true) {
            setter(scope.$parent, angular.add(current, value));
          } else {
            setter(scope.$parent, angular.remove(current, value));
          }
        });

        scope.$parent.$watch(attrs.checklistModel, function(newArr) {
          scope.checked = angular.contains(newArr, value);
        });
      }
    };
  }
}
