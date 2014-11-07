var allNaturalControllers = angular.module('allNaturalControllers', []);

allNaturalControllers.controller('ItemListCtrl', ['$scope', 'Item', function($scope, Item) {
  $scope.items = Item.query();
  $scope.orderProp = 'age';
}]);

allNaturalControllers.controller('ItemDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('items/' + $routeParams.itemId + '.json').success(function(data) {
      $scope.item = data;
      $scope.mainImageUrl = data.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);