'use strict';

import NavLink from './nav-link.directive';
import DropdownMenuHover from './dropdown-menu-hover.directive';
import NgSpinnerBar from './ng-spinner-bar.directive';
import ChecklistModel from './checklist-model.directive';
import iCheck from './iCheck.directive';

export default angular.module(`${APP_NAME}.directives`, [])
  .directive('dropdownMenuHover', DropdownMenuHover.getInstance)
  .directive('ngSpinnerBar', NgSpinnerBar.getInstance)
  .directive('checklistModel', ChecklistModel.getInstance)
  .directive('iCheck', iCheck.getInstance)
  .directive('a', NavLink.getInstance).name;
