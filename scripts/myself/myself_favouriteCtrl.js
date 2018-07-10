// My favorite
angular.module('myself')
	.controller('FavouriteCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
		// title
		$rootScope.title = 'My favorite';
		// key
		$rootScope.key = 4;
		// complete loading
		$rootScope.loaded = true;
	}]);