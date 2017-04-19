var ngModule;
try {
  ngModule = angular.module('wfm.polarity-check');
} catch (e) {
  ngModule = angular.module('wfm.polarity-check', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/polarity-check.tpl.html',
    '\n' +
    '  <md-subheader>Polarity Check</md-subheader>\n' +
    '\n' +
    '  <md-list class="risk-assessment">\n' +
    '\n' +

    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">cloud</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{polarityCheck.humidity}} %</h3>\n' +
    '        <p>Humidity</p>\n' +
    '      </div>\n' +
    '      <md-divider></md-divider>\n' +
    '    </md-list-item>\n' +

    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">add_circle</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{polarityCheck.v1}} v</h3>\n' +
    '        <p>V1</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +

    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">add_circle</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{polarityCheck.v2}} v</h3>\n' +
    '        <p>V2</p>\n' +
    '      </div>\n' +
    '    </md-list-item>\n' +

    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons">add_circle</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{polarityCheck.v3}} v</h3>\n' +
    '        <p>V3</p>\n' +
    '      </div>\n' +
    '    <md-divider></md-divider>\n' +
    '    </md-list-item>\n' +

    '    <md-list-item class="md-2-line" >\n' +
    '      <md-icon md-font-set="material-icons" ng-if="((polarityCheck.v1 * 1 + polarityCheck.v2 * 1) == polarityCheck.v3)" class="success">add_circle</md-icon>\n' +
    '      <md-icon md-font-set="material-icons" ng-if="((polarityCheck.v1 * 1 - polarityCheck.v2 * 1) == polarityCheck.v3)" class="success">remove_circle</md-icon>\n' +
    '      <md-icon md-font-set="material-icons" ng-if="((polarityCheck.v1 * 1 - polarityCheck.v2 * 1) != polarityCheck.v3) && ((polarityCheck.v1 * 1 + polarityCheck.v2 * 1) != polarityCheck.v3)" class="danger">cancel</md-icon>\n' +
    '      <div class="md-list-item-text" ng-if="((polarityCheck.v1 * 1 + polarityCheck.v2 * 1) == polarityCheck.v3)">\n' +
    '        <h3>Additive</h3>\n' +
    '        <p>Result</p>\n' +
    '      </div>\n' +
    '      <div class="md-list-item-text" ng-if="((polarityCheck.v1 * 1 - polarityCheck.v2 * 1) == polarityCheck.v3)">\n' +
    '        <h3>Substractive</h3>\n' +
    '        <p>Result</p>\n' +
    '      </div>\n' +
    '      <div class="md-list-item-text" ng-if="((polarityCheck.v1 * 1 - polarityCheck.v2 * 1) != polarityCheck.v3) && ((polarityCheck.v1 * 1 + polarityCheck.v2 * 1) != polarityCheck.v3)">\n' +
    '        <h3>Error</h3>\n' +
    '        <p>Result</p>\n' +
    '      </div>\n' +

    '    <md-divider></md-divider>\n' +
    '    </md-list-item>\n' +

    '\n' +
    '</md-list>\n' +
    '');
}]);
