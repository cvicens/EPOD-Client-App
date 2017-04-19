var ngModule;
try {
  ngModule = angular.module('wfm.vehicle-assessment');
} catch (e) {
  ngModule = angular.module('wfm.vehicle-assessment', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/vehicle-assessment-form.tpl.html',
    '  <div ng-show="vehicleAssessmentStep === 0" layout-padding class="risk-assesssment">\n' +
    '      <h2 class="md-title">Confirm details</h2>\n' +

    '      <div layout="row" class="vehicle-assesment-row">\n' +
    '        <div flex="40" layout="row" layout-align="start center">\n' +
    '          <span class="md-body-2">\n' +
    '            <md-icon md-font-set="material-icons">perm_contact_calendar</md-icon>\n' +
    '            Driver\n' +
    '          </span>\n' +
    '        </div>\n' +
    //'        <input type="text" name="input" ng-model="ctrl.model.driver" ng-disabled="true">\n' +
    '        <input type="text" name="input" ng-model="profileData.name" ng-disabled="true">\n' +
    '      </div>\n' +

    '      <div layout="row" class="vehicle-assesment-row">\n' +
    '        <div flex="40" layout="row" layout-align="start center">\n' +
    '          <span class="md-body-2">\n' +
    '            <md-icon md-font-set="material-icons">local_shipping</md-icon>\n' +
    '            Vehicle\n' +
    '          </span>\n' +
    '        </div>\n' +
    '        <input type="text" ng-disabled="true" name="input" ng-maxlength="6" ng-model="profileData.vehicle">\n' +
    '      </div>\n' +

    //'      <div layout="row" class="vehicle-assesment-row">\n' +
    //'        <div flex="40" layout="row" layout-align="start center">\n' +
    //'          <span class="md-body-2">\n' +
    //'            <md-icon md-font-set="material-icons">fiber_pin</md-icon>\n' +
    //'            Vehicle PIN\n' +
    //'          </span>\n' +
    //'        </div>\n' +
    //'        <input type="text" name="input" ng-maxlength="6" ng-model="ctrl.model.vehiclePIN" >\n' +
    //'      </div>\n' +


    '      <p class="md-body-1">I certify that I have checked my vehicle and that the vehicle complies with the safety requirements</p>\n' +

    '    <div class="workflow-actions md-padding md-whiteframe-z4">\n' +
    //'      <md-button class="md-primary md-warn" ng-click="ctrl.answerComplete($event, false)">No</md-button>\n' +
    '      <md-button class="md-primary md-warn" ng-disabled="isAborted" ng-click="ctrl.showAbortConfirm($event)">No</md-button>\n' +
    '      <md-button class="md-primary" ng-disabled="isAborted" ng-click="ctrl.answerComplete($event, true)">Yes</md-button>\n' +
    '    </div><!-- workflow-actions-->\n' +

    '  </div>\n' +

    '  <div ng-if="vehicleAssessmentStep == 1" layout-padding>\n' +

    '    <h3 class="md-title">Signature</h3>\n' +
    '    <p class="md-caption">Draw your signature inside the square</p>\n' +
    '    <signature-form value="ctrl.model.signature"></signature-form>\n' +

    '    <div class="workflow-actions md-padding md-whiteframe-z4">\n' +
    '      <md-button class="md-primary md-hue-1" ng-disabled="isAborted" ng-click="ctrl.back($event)">Back</md-button>\n' +
    '      <md-button class="md-primary" ng-disabled="isAborted" ng-click="ctrl.done($event)">Continue</md-button>\n' +
    '    </div><!-- workflow-actions-->\n' +
    '  </div>\n' +
    '');
}]);
