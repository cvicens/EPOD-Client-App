'use strict';

var ngModule = angular.module('wfm.vehicle-assessment', ['wfm.core.mediator', require('fh-wfm-signature'),
                                                                              require('fh-wfm-user')])

require('../../dist');

function getFormattedTime(date) {
  return ('0' + date.getHours()).slice(-2) + ':' + ('0' + (date.getMinutes()+1)).slice(-2);
}

ngModule.directive('vehicleAssessment', function($templateCache, mediator, userClient) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/vehicle-assessment.tpl.html')
  , scope: {
      vehicleAssessment: "=value"
      //,profileData: userClient.getProfile()
    }
  , controller: function($scope) {
      var self = this;
    }
  , controllerAs: 'ctrl'
  };
})

ngModule.directive('vehicleAssessmentForm', function($templateCache, $state, $mdDialog, workorderSync, mediator, userClient) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/vehicle-assessment-form.tpl.html')
  , scope: {
      addSignature: "@addSignature"
    }, link: function(scope, element, attributes){
        var self = this;
        console.log('WATCHOUT!!! ', attributes);
      }
  , controller: function($scope, userClient) {
      var self = this;
      $scope.vehicleAssessmentStep = 0;

      self.workorder = $scope.$parent.workorder;
      $scope.isAborted = self.workorder.aborted === true ? true : false;
      self.model = {
        driver: '',
        vehicle: '',
        vehiclePIN: '123456',
        certified: false
      };

      workorderSync.createManager().then (function (manager){
        self.workorderManager = manager;
      });

      // We do this after the model has been created...
      userClient.getProfile().then (function (profileData){
        $scope.profileData = profileData;
        console.log('1', $scope.profileData);
      });

      self.answerComplete = function(event, answer) {
        self.model.complete = answer;
        // If we don't want to capture the signature...
        if (typeof $scope.addSignature === 'undefined' || $scope.addSignature === 'false') {
          self.done(event);
          return;
        } else if ($scope.addSignature === 'true') {
          $scope.vehicleAssessmentStep++;
        }

        event.preventDefault();
        event.stopPropagation();
      };

      self.abort = function(event, reason) {
        self.model.complete = false;
        $scope.isAborted = true;
        self.model.aborted = self.workorder.aborted = true;
        self.model.abortTime = self.workorder.abortTime = getFormattedTime(new Date());
        self.model.abortReason = self.workorder.abortReason = reason;

        self.workorderManager.update(self.workorder);
        //mediator.publish('wfm:workflow:step:back');
        $state.go('app.workorders');

        event.preventDefault();
        event.stopPropagation();
      };

      self.showAbortConfirm = function(ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.prompt()
          .title('Do you want to abort the delivery?')
          .textContent('What is the reason?')
          .placeholder('Abort Reason')
          .ariaLabel('Reason')
          .targetEvent(ev)
          .ok('YES PROCEEED')
          .cancel('NO');

        $mdDialog.show(confirm).then(function(reason) {
          console.log('Abort Reason', reason);
          self.abort(ev, reason);
        }, function() {
          console.log('Aborting the abort dialog!');
        });
      };

      self.back = function(event) {
        mediator.publish('wfm:workflow:step:back');
        event.preventDefault();
        event.stopPropagation();
      }
      self.done = function(event) {
        self.workorder.completedAction = 'VEHICLE ASSESSMENT';
        self.workorderManager.update(self.workorder);
        mediator.publish('wfm:workflow:step:done', self.model);
        event.preventDefault();
        event.stopPropagation();
      };
    }
  , controllerAs: 'ctrl'
  };
})
;

module.exports = 'wfm.vehicle-assessment';
