var ngModule;
try {
  ngModule = angular.module('wfm.vehicle-assessment');
} catch (e) {
  ngModule = angular.module('wfm.vehicle-assessment', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/vehicle-assessment.tpl.html',
    '  <md-subheader>Vehicle Assessment</md-subheader>\n' +
    '\n' +
    '  <md-list class="vehicle-assessment">\n' +
    '\n' +
    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons" ng-if="vehicleAssessment.complete" class="success">check_circle</md-icon>\n' +
    '      <md-icon md-font-set="material-icons" ng-if="! vehicleAssessment.complete" class="danger">cancel</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3 ng-if="vehicleAssessment.complete">Complete</h3>\n' +
    '        <h3 ng-if="! vehicleAssessment.complete">Uncompleted</h3>\n' +
    '        <p>Vehicle Assessment</p>\n' +
    '      </div>\n' +
    '    <md-divider></md-divider>\n' +
    '    </md-list-item>\n' +
    '\n' +
    '    <md-list-item class="md-2-line with-image">\n' +
    '      <md-icon md-font-set="material-icons">gesture</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3><signature value="vehicleAssessment.signature"></signature></h3>\n' +
    '        <p>Vehicle Assessment signature</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +
    '\n' +
    '</md-list>\n' +
    '');
}]);
