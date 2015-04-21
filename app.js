console.log ("#Montse: Cargo app.js");
var modulo1=
	angular.module("reeditgam",[]);
modulo1.controller("mainCtrl",[
	'$scope',
	function($scope){
		$scope.test = "Hola Angular";
		$scope.posts = 
	   ["Posts 1 Hola",
		"Posts 2",
		"Posts 3",
		"Posts 4",
		"Posts 5"];
	}]);