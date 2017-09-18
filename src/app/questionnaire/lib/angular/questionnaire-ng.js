'use strict';

var _ = require('lodash');

var ngModule = angular.module('wfm.questionnaire', ['wfm.core.mediator']);

require('../../dist');

ngModule.directive('questionnaire', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/questionnaire.tpl.html')
  , scope: {
      questionnaire: '=value'
    }
  };
})

ngModule.directive('questionnaireForm', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/questionnaire-form.tpl.html')
  , scope: {
      type: "@type"
    }
  , controller: function($scope, $fh) {
    var self = this;
    self.model = {
      type: $scope.type,
    };

    var params = {
      path: 'questionnaire/' + $scope.type,
      method: "GET",
      contentType: "application/json",
      data: {},
      timeout: 15000
    };

    $fh.cloud(params, function (data) {
      self.model.data = data;
      $scope.$apply();
    }, function (msg, err) {
      self.model.msg = msg;
      self.model.err = err;
      $scope.$apply();
    });

    self.back = function(event) {
      mediator.publish('wfm:workflow:step:back');
      event.preventDefault();
      event.stopPropagation();
    }
    self.done = function(event) {
      mediator.publish('wfm:workflow:step:done', self.model);
      event.preventDefault();
      event.stopPropagation();
    }
  }
  , controllerAs: 'ctrl'
  };
})

module.exports = 'wfm.questionnaire';
