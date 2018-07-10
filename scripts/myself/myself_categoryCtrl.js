// 栏目浏览
angular.module('myself')
	.controller('CategoryCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
		// loading incomplete
		$rootScope.loaded = false;
		// title
		$rootScope.title = 'Category';
		// key
		$rootScope.key = 3;

		$http({
			url : './api/category.php',
			method : 'get'
		}).then(function(res){
			// console.log(res.data);
			$scope.columns = res.data.columns;

			// complete loading
			$rootScope.loaded = true;
		});
	}]);