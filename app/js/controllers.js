var allNaturalApp = angular.module('allNaturalApp', []);

allNaturalApp.controller('ItemListCtrl', function ($scope, $http) {
  $http.get('items/items.json').success(function(data) {
    $scope.items = data;
  });

  $scope.orderProp = 'age';
});