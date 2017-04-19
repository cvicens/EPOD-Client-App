'use strict';

var _ = require('lodash');

var ngModule = angular.module('wfm.polarity-check', ['wfm.core.mediator']);

require('../../dist');

ngModule.directive('polarityCheck', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/polarity-check.tpl.html')
  , scope: {
      polarityCheck: '=value'
    }
  };
})

ngModule.directive('polarityCheckForm', function($templateCache, mediator) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/polarity-check-form.tpl.html')
  , scope: {
    }
  , controller: function() {
    var self = this;
    self.model = {};
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

module.exports = 'wfm.polarity-check';
