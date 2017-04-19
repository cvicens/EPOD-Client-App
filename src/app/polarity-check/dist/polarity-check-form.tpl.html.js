var ngModule;
try {
  ngModule = angular.module('wfm.polarity-check');
} catch (e) {
  ngModule = angular.module('wfm.polarity-check', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/polarity-check-form.tpl.html',
    '  <div layout="row" class="polarity-check-row">\n' +
    '    <img src="http://circuitglobe.com/wp-content/uploads/2015/09/polarity-test-of-transformer-compressor.jpg" class="displayed" alt="Diagram_TTR" width="190" height="150">\n' +
    '  </div>\n' +
    '\n' +
    '  <md-divider></md-divider>\n' +
    '\n' +
    '  <div layout="row" class="wfm-inspection-row">\n' +
    '    <div flex="40" layout="row" layout-align="start center">\n' +
    '      <span class="md-body-2">\n' +
    '        <md-icon md-font-set="material-icons">add_circle</md-icon>\n' +
    '        Voltage 1 (v)\n' +
    '      </span>\n' +
    '    </div>\n' +
    '    <input type="number" name="input" ng-model="ctrl.model.v1" ng-maxlength="6">\n' +
    '  </div>\n' +
    '\n' +
    '  <div layout="row" class="wfm-inspection-row">\n' +
    '    <div flex="40" layout="row" layout-align="start center">\n' +
    '      <span class="md-body-2">\n' +
    '        <md-icon md-font-set="material-icons">add_circle</md-icon>\n' +
    '        Voltage 2 (v)\n' +
    '      </span>\n' +
    '    </div>\n' +
    '    <input type="number" name="input" ng-model="ctrl.model.v2" ng-maxlength="6">\n' +
    '  </div>\n' +
    '\n' +
    '  <div layout="row" class="wfm-inspection-row">\n' +
    '    <div flex="40" layout="row" layout-align="start center">\n' +
    '      <span class="md-body-2">\n' +
    '        <md-icon md-font-set="material-icons">add_circle</md-icon>\n' +
    '        Voltage 3 (v)\n' +
    '      </span>\n' +
    '    </div>\n' +
    '    <input type="number" name="input" ng-model="ctrl.model.v3" ng-maxlength="6">\n' +
    '  </div>\n' +
    '\n' +
    '  <div layout="row" class="wfm-inspection-row">\n' +
    '    <div flex="40" layout="row" layout-align="start center">\n' +
    '      <span class="md-body-2">\n' +
    '        <md-icon md-font-set="material-icons">add_circle</md-icon>\n' +
    '        Humidity (%)\n' +
    '      </span>\n' +
    '    </div>\n' +
    '    <md-slider flex md-discrete ng-model="ctrl.model.humidity" step="20" min="0" max="100" aria-label="rating">\n' +
    '    </md-slider>\n' +
    '  </div>\n' +
    '\n' +
    '    <md-divider></md-divider>\n' +
    '\n' +
    '  <div layout="row" class="wfm-inspection-row">\n' +
    '    <div flex="30" layout="row" layout-align="start center">\n' +
    '      <span class="md-body-2">\n' +
    //'        <md-icon md-font-set="material-icons">location_searching</md-icon>\n' +
    '        Test result\n' +
    '      </span>\n' +
    '    </div>\n' +
    '    <div flex layout-align="start start" ng-if="ctrl.model.v1 && ctrl.model.v2">\n' +
    '      <span class="md-body-2" ng-if="((ctrl.model.v1 * 1 + ctrl.model.v2 * 1) == ctrl.model.v3)"><md-icon md-font-set="material-icons" class="success">add_circle</md-icon> Additive</span>\n' +
    '      <span class="md-body-2" ng-if="((ctrl.model.v1 * 1 - ctrl.model.v2 * 1) == ctrl.model.v3)"><md-icon md-font-set="material-icons" class="success">remove_circle</md-icon> Substractive</span>\n' +
    '      <span class="md-body-2" ng-if="((ctrl.model.v1 * 1 - ctrl.model.v2 * 1) != ctrl.model.v3) && ((ctrl.model.v1 * 1 + ctrl.model.v2 * 1) != ctrl.model.v3)"><md-icon md-font-set="material-icons" class="danger">cancel</md-icon> Error</span>\n' +
    '    </div>\n' +
    '    <div flex layout-align="start start" ng-if="! (ctrl.model.v1 && ctrl.model.v2)">\n' +
    '      <span class="md-body-2"><md-icon md-font-set="material-icons" ng-if="! (ctrl.model.v1 && ctrl.model.v2)" class="undefined">report</md-icon></span>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '\n' +
    '    <div class="workflow-actions md-padding md-whiteframe-z4">\n' +
    '      <md-button class="md-primary md-hue-1" ng-click="ctrl.back($event)">Back</md-button>\n' +
    '      <md-button class="md-primary" ng-click="ctrl.done($event)">Continue</md-button>\n' +
    '    </div><!-- workflow-actions-->\n' +
    '');
}]);
