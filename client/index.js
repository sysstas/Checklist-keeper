"use strict";


angular.module('cheklistKeeper', ['ngAnimate'])

.controller('DateController', ['$scope', function($scope) {
   $scope.example = {
     value: new Date(2013, 9, 22)
   };
 }])

.controller('auditsCtrl', function($scope, $http){

	$http.get('/auditors').then((response)=>{
		$scope.auditors = response.data;		
		console.log(response.status);
	});

/*$scope.auditors = [
	{
		name: "Iron Man",
		audits: [{month: "june", amount: 3}]
	},
	{
		name: "Thor",
		audits: [{month: "june", amount: 2}]
	},
	{
		name: "Spider Men",
		audits: [{month: "june", amount: 1}]
	}
];*/
	
		
	
});