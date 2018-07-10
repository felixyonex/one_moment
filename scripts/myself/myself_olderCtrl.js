// Yesterday
angular.module('myself')
	.controller('OlderCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
		// loading incomplete
		$rootScope.loaded = false;
		// title
		$rootScope.title = 'Yesterday';
		// key
		$rootScope.key = 1;

		$http({
			// access API in domain
			url : './api/older.php',
			method : 'get',
			params : {day : -32}
		}).then(function(res){
			// console.log(res.data);
			$scope.posts = res.data.posts;
			$scope.date = res.data.date;

			// complete loading
			$rootScope.loaded = true;
		});
	}]);