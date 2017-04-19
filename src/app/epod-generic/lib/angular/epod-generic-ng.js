'use strict';

var ngModule = angular.module('wfm.epod-generic', ['wfm.core.mediator',
                                                   require('fh-wfm-signature'),
                                                   require('fh-wfm-workorder'),
                                                   require('fh-wfm-user')]);

require('../../dist');

function getFormattedTime(date) {
  return ('0' + date.getHours()).slice(-2) + ':' + ('0' + (date.getMinutes()+1)).slice(-2);
}

function calculateWaitingTimeNow (pastTime) {
  var currentTime = new Date();

  var hours = pastTime.substring(0,2);
  var minutes = pastTime.substring(3,6);
  var pastTimeInMinutes = hours * 60 + minutes * 1;

  console.log('hours', hours, 'minutes', minutes,'pastTimeInMinutes', pastTimeInMinutes);

  var currentTimeInMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();

  return currentTimeInMinutes - pastTimeInMinutes;
}

ngModule.directive('epodGeneric', function($templateCache, mediator, userClient) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/epod-generic.tpl.html')
  , scope: {
      epodGeneric: "=value"
    }
  , controller: function($scope) {
      var self = this;

      userClient.getProfile().then (function (profileData){
        $scope.profileData = profileData;
      });
    }
  , controllerAs: 'ctrl'
  };
});

ngModule.directive('epodGenericForm', function($templateCache, mediator, userClient, $timeout) {
  return {
    restrict: 'E'
  , template: $templateCache.get('wfm-template/epod-generic-form.tpl.html')
  , scope: {
      //profileData: userClient.getProfile(),
      action: "@action"
    }
  , link: function(scope, element, attributes){
      var self = this;
      console.log('WATCHOUT!!! ', attributes.action);
    }
  , controller: function($q, $scope, $state, $timeout, $mdDialog, $mdToast, workorderSync, userClient) {
      var self = this;
      $scope.epodGenericStep = 0;
      $scope.isActionButtonDisabled = false;
      $scope.isContinueButtonDisabled = true;
      $scope.isAborted = false;
      $scope.isSignatureStep = false;
      $scope.selectedIndex = 0;
      $scope.returnedMaterialToastCount = 0;

      $scope.count = 0;
      $scope.showDisclaimer = false;

      $scope.$watch('selectedIndex', function(current, old) {
        console.log('current', current, "old", old);
      });

      workorderSync.createManager().then (function (manager){
        self.workorderManager = manager;
      });

      self.workorder = $scope.$parent.workorder; // TODO, use the workorderManager
      $scope.isAborted = self.workorder.aborted;

      self.model = { // TODO this data shoud come from a call to the MBaaS
        action: $scope.action,
        timeOnSite: (typeof self.workorder.timeOnSite !== 'undefined' ? self.workorder.timeOnSite : ''), // Arrival time from customer
        dischargeStartTime: (typeof self.workorder.dischargeStartTime !== 'undefined' ? self.workorder.dischargeStartTime : ''),
        dischargeEndTime: (typeof self.workorder.dischargeEndTime !== 'undefined' ? self.workorder.dischargeEndTime : ''),
        timeOffSite: (typeof self.workorder.timeOffSite !== 'undefined' ? self.workorder.timeOffSite : ''), // Departure time from customer
        addedWater: (self.workorder.addedWater > 0 ? self.workorder.addedWater : 0),
        returnedMaterial: (self.workorder.returnedMaterial > 0 ? self.workorder.returnedMaterial : 0),
        reasonReturnedMaterial: '',
        waitingTime: 0
      };

      // We do this after the model has been created...
      userClient.getProfile().then (function (profileData){
        $scope.profileData = profileData;
        console.log('profile', $scope.profileData);
        self.model.driver = $scope.profileData.name;
        self.model.vehicle = $scope.profileData.vehicle;
        self.model.driverId = $scope.profileData.id;
      });

      if ($scope.action === 'START DISCHARGE') {
        $scope.showDisclaimer = true;
      }

      if ($scope.action === 'START DISCHARGE' ||
          $scope.action === 'FINISH DISCHARGE') {
          $scope.selectedIndex = 1;
      } else if ($scope.action === 'CONFIRM ADDITIONS') {
          $scope.selectedIndex = 3;
      } else if ($scope.action === 'SUMMARY') {
        var n = new Date();
        self.model.timeOffSite = getFormattedTime(n);
        $scope.selectedIndex = 4;
      }

      $scope.showToast = function(message) {
        $mdToast.show($mdToast.simple()
        .textContent(message)
        .position('top right')
        .hideDelay(3000));
      };

      $scope.monitorReturnedMaterial = function ($event) {
        console.log('$scope.returnedMaterialToastCount', $scope.returnedMaterialToastCount,
                    'self.model.returnedMaterial', self.model.returnedMaterial);
        if (self.model.returnedMaterial > 0) {
          if ($scope.returnedMaterialToastCount < 1) {
            $scope.returnedMaterialToastCount++;
            $scope.showToast('Please provide a reason for returning material');
          }
        } else {
          $scope.returnedMaterialToastCount = 0;
        }
      };

      self.dataIsValid = function() {
        if ($scope.action === 'CONFIRM ADDITIONS') {
          if (self.model.returnedMaterial > 0) {
            return self.model.reasonReturnedMaterial.length > 0;
          }
        }

        return true;
      };

      self.onAction = function(ev, multistep) {
        console.log('action', $scope.action);
        var n = new Date();
        switch ($scope.action) {
          case 'ARRIVAL':
            self.model.timeOnSite = getFormattedTime(n);
            self.workorder.timeOnSite = self.model.timeOnSite;
            break;
          case 'START DISCHARGE':
            self.model.dischargeStartTime = getFormattedTime(n);
            self.workorder.dischargeStartTime = self.model.dischargeStartTime;
            break;
          case 'FINISH DISCHARGE':
            self.model.dischargeEndTime = getFormattedTime(n);

            self.workorder.dischargeEndTime = self.model.dischargeEndTime;

            break;
          case 'CONFIRM ADDITIONS':
              // TODO
              if (self.model.addedWater > 0) {
                $scope.showConfirmWaterAdded(ev)
                .then(function () {
                  $scope.additionsStatus = 'Water added at customer request';

                  setTimeout(function () {
                    self.done(ev);
                  }, 10);

                }, function () {
                  self.model.addedWater = 0;
                  // Return buttons to it's initial status
                  $scope.isActionButtonDisabled = false;
                  $scope.isContinueButtonDisabled = true;
                });
                console.log('3');
                return;

              }
              //$scope.selectedTab = 3;
              break;
          case 'SUMMARY':
              $scope.isSignatureStep = true;
              // Overriding time values by driver
              self.workorder.addedWater = self.model.addedWater;
              self.workorder.returnedMaterial = self.model.returnedMaterial;
              self.workorder.timeOnSite = self.model.timeOnSite;
              self.workorder.dischargeStartTime = self.model.dischargeStartTime;
              self.workorder.dischargeEndTime = self.model.dischargeEndTime;
              self.workorder.timeOffSite = self.model.timeOffSite;
              self.model.waitingTime = calculateWaitingTimeNow(self.workorder.timeOnSite);
              self.workorder.waitingTime = self.model.waitingTime;
              break;
          default:

        }

        //self.workorderManager.update(self.workorder);
        //mediator.publish('wfm:workorder:updated', self.workorder);

        // Action can be triggered only once
        $scope.isActionButtonDisabled = true;
        $scope.isContinueButtonDisabled = false;

        if (! multistep) {
          self.done(ev);
        }
      };

      self.answerComplete = function(event, answer) {
        self.model.complete = answer;
        $scope.epodGenericStep++;
        event.preventDefault();
        event.stopPropagation();
      };

      self.done = function(event) {
        //debugger;
        if ('CONFIRM ADDITIONS' === $scope.action) {
          self.workorder.addedWater = self.model.addedWater;
          self.workorder.returnedMaterial = self.model.returnedMaterial;
          self.workorder.waitingTime = self.model.waitingTime;
        } else {
          self.workorder.onBehalf = self.model.onBehalf;
        }

        self.workorder.driver = self.model.driver;
        self.workorder.completedAction = $scope.action;

        // Publish model, update workorder
        self.workorderManager.update(self.workorder);
        //mediator.publish('wfm:workorder:updated', self.workorder);
        mediator.publish('wfm:workflow:step:done', self.model);

        event.preventDefault();
        event.stopPropagation();
      };

      self.abort = function(event, reason) {
        $scope.isAborted = true;
        self.model.aborted = self.workorder.aborted = true;
        self.model.abortTime = self.workorder.abortTime = getFormattedTime(new Date());
        self.model.abortReason = self.workorder.abortReason = reason;

        self.workorderManager.update(self.workorder);
        //mediator.publish('wfm:workorder:updated', self.workorder);
        $state.go('app.workorders');

        event.preventDefault();
        event.stopPropagation();
      };

      self.showAbortConfirm = function(ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.prompt()
          .title('Do you want to abort the dicharge?')
          .textContent('What is the reason?')
          .placeholder('Abort reason')
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

      $scope.showConfirmWaterAdded = function(ev) {
        var deferred = $q.defer();

        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.confirm()
              .title('WARNING')
              .textContent('Water added at Customer request?')
              .ariaLabel('EPOD')
              .targetEvent(ev)
              .ok('YES')
              .cancel('NO');

        $mdDialog.show(confirm).then(function() {
          deferred.resolve('YES');
        }, function() {
          deferred.reject('NO');
        });

        return deferred.promise;
      };

      $scope.afterShowAnimation = function(scope, element, options) {
        console.log('in afterShowAnimation');
      };

      $scope.closeDialog = function() {
        // Easily hides most recent dialog shown...
        // no specific instance reference is needed.
        $mdDialog.hide();
      };

      self.acceptDisclaimer = function() {
        $scope.count++;
        $scope.showDisclaimer = false;
      };

      //$scope.getFormattedTime = function (date) {
      //  return ('0' + date.getHours()).slice(-2) + ':' + ('0' + (date.getMinutes()+1)).slice(-2);
      //}
    }
  , controllerAs: 'ctrl'
  };
})
;

module.exports = 'wfm.epod-generic';
