var allNaturalApp = angular.module('allNaturalApp', []);

allNaturalApp.controller('ItemListCtrl', function ($scope) {
  $scope.items = [
    {'name': 'Windex',
     'snippet': 'Sprays stuff',
 	 'age': 1},
    {'name': 'Mr. Clean',
     'snippet': 'Cleans floors.',
 	 'age': 2},
    {'name': 'All-Purpose Cleaner',
     'snippet': 'Cleans stuffs',
 	 'age': 3}
  ];


  $scope.orderProp = 'age';
});