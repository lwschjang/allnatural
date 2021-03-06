'use strict';

var allNaturalApp = angular.module('allNaturalApp', [
'ngRoute',
'allNaturalAnimations',
'allNaturalControllers', 
'allNaturalServices'
]);

allNaturalApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/items', {
        templateUrl: 'partials/item-list.html',
        controller: 'ItemListCtrl'
      }).
      when('/items/:itemId', {
        templateUrl: 'partials/item-detail.html',
        controller: 'ItemDetailCtrl'
      }).
      otherwise({
        redirectTo: '/items'
      });
  }]);