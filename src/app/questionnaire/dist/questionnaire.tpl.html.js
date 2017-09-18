var ngModule;
try {
  ngModule = angular.module('wfm.questionnaire');
} catch (e) {
  ngModule = angular.module('wfm.questionnaire', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/questionnaire.tpl.html',
    '\n' +
    '  <md-subheader>Questionnaire {{questionnaire.type}}</md-subheader>\n' +
    '\n' +
    '  <md-list class="questionnaire">\n' +
    '\n' +

    '    <md-list-item class="md-2-line" ng-repeat="item in questionnaire.data track by item.id">\n' +
    '      <md-icon md-font-set="material-icons">{{item.icon}}</md-icon>\n' +
    '      <div class="md-list-item-text">\n' +
    '        <h3>{{questionnaire.answer[$index]}}</h3>\n' +
    '        <p>{{item.question}}</p>\n' +
    '      </div>\n' +
    '      <md-divider></md-divider>\n' +
    '    </md-list-item>\n' +


    '\n' +
    '</md-list>\n' +
    '');
}]);
