var allNaturalControllers = angular.module('allNaturalControllers', []);

allNaturalControllers.controller('ItemListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('items/items.json').success(function(data) {
      $scope.items = data;
    });

    $scope.orderProp = 'age';
  }]);

allNaturalControllers.controller('ItemDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('items/' + $routeParams.itemId + '.json').success(function(data) {
      $scope.item = data;
    });
  }]);