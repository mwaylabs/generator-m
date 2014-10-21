'use strict';
angular.module('<%= answers.appName %>', [
  'ionic',
  'ui.router'<% if (answers.ngTemplate) { %>,
  'templates'<% } %>
// TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {

  console.log('Allo! Allo from Angular!');

  // some basic routing
  $urlRouterProvider.otherwise('/start');
  $stateProvider
    .state('start', {
      url: '/start',
      templateUrl: 'partials/start.html',
      controller: 'StartCtrl'
    });

  // TODO: do your thing
});
