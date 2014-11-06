var allNaturalApp = angular.module('allNaturalApp', []);

allNaturalApp.controller('ItemListCtrl', function ($scope) {
  $scope.items = [
    {'name': 'Windex',
     'snippet': 'Sprays stuff'},
    {'name': 'Mr. Clean',
     'snippet': 'Cleans floors.'},
    {'name': 'All-Purpose Cleaner',
     'snippet': 'Cleans stuffs'}
  ];
});