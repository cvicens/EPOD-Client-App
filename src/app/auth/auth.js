'use strict';

module.exports = 'wfm-mobile.auth';

angular.module('wfm-mobile.auth', [
  'ui.router',
, 'wfm.core.mediator'
])

.config(function($stateProvider) {
  $stateProvider
    .state('app.login', {
        url: '/login',
        templateUrl: 'app/auth/login.tpl.html',
        controller: 'LoginCtrl as ctrl',
        resolve: {
          hasSession: function(userClient) {
            return userClient.hasSession();
          }
        }
      })
    .state('app.profile', {
        url: '/profile',
        templateUrl: 'app/auth/profile.tpl.html',
        controller: 'ProfileCtrl as ctrl',
      })
    .state('app.password-reset', {
        url: '/password-reset',
        templateUrl: 'app/auth/password-reset.tpl.html',
        controller: 'PasswordResetCtrl as ctrl',
        resolve: {
          hasSession: function(userClient) {
            return userClient.hasSession();
          }
        }
      })
})

.controller('LoginCtrl', function($state, userClient, hasSession, Constants) {
  var self = this;

  self.companyName = Constants.COMPANY_NAME;

  self.hasSession = hasSession;

  self.loginMessages = {success: false, error: false};

  self.login = function(valid) {
    if (valid) {
      userClient.auth(self.username, self.password)
      .then(function() {
        self.loginMessages.success = true;
      }, function(err) {
        console.log(err);
        self.loginMessages.error = true;
      });
    }
  }

  self.logout = function() {
    userClient.clearSession()
  }

  self.passwordReset = function() {
    $state.go('app.password-reset');
  }
})

.controller('ProfileCtrl', function() {
})

.controller('PasswordResetCtrl', function($state,  userClient, hasSession, Constants) {
  var self = this;
  self.companyName = Constants.COMPANY_NAME;

  self.resetPassword = function () {
    $state.go('app.login');
  }
})
;
