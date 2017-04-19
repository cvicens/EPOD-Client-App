'use strict';

angular.module('wfm-mobile.fetch-ticket', [
  'ui.router'
])

.config(function($stateProvider) {
  $stateProvider
    .state('app.fetch-ticket', {
        url: '/fetch-ticket',
        templateUrl: 'app/fetch-ticket/fetch-ticket.tpl.html',
        controller: 'FetchTicketCtrl as ctrl',
        resolve: {
          workorders: function(workorderManager) {
            return workorderManager.list();
          },
          resultMap: function(resultManager) {
            return resultManager.list()
            .then(function(results) {
              var map = {};
              results.forEach(function(result) {
                map[result.workorderId] = result;
              });
              return map;
            })
          }
        }
      })
})

.controller('FetchTicketCtrl', function($scope, $filter, $state, workorderManager, mediator, workorders, resultMap) {
  var self = this;
  self.workorders = workorders;
  self.resultMap = resultMap;

  $scope.fetchTicket = function () {
    $state.go('app.workorders');
  }

});

module.exports = 'wfm-mobile.fetch-ticket';
