var ngModule;
try {
  ngModule = angular.module('wfm.questionnaire');
} catch (e) {
  ngModule = angular.module('wfm.questionnaire', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/questionnaire-form.tpl.html',
  //'  <div layout="row" class="questionnaire-row">\n' +
  //'    <img src="http://circuitglobe.com/wp-content/uploads/2015/09/polarity-test-of-transformer-compressor.jpg" class="displayed" alt="Diagram_TTR" width="190" height="150">\n' +
  //'  </div>\n' +
  //'\n' +
  '  <md-divider></md-divider>\n' +

  //'  <div layout="column" class="questionnaire-row" ng-repeat="item in ctrl.model.data track by item.id">\n' +
  '    <md-input-container class="questionnaire-row md-icon-float md-block" ng-repeat="item in ctrl.model.data track by item.id">\n' +
  '        <label>{{item.question}}</label>\n' +
  '        <md-icon md-font-set="material-icons">{{item.icon}}</md-icon>\n' +
  '        <input ng-model="ctrl.model.answer[$index]" type="text">\n' +
  '    </md-input-container>\n' +
  //'  </div>\n' +



  '\n' +
  '\n' +
  '    <div class="workflow-actions md-padding md-whiteframe-z4">\n' +
  '      <md-button class="md-primary md-hue-1" ng-click="ctrl.back($event)">Back</md-button>\n' +
  '      <md-button class="md-primary" ng-click="ctrl.done($event)">Continue</md-button>\n' +
  '    </div><!-- workflow-actions-->\n' +
  '');
}]);
