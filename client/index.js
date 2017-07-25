"use strict";


  angular.module('dateExample', ['ngAnimate'])
    .controller('DateController', ['$scope', function($scope) {
       $scope.example = {
         value: new Date(2013, 9, 22)
       };
     }]);
