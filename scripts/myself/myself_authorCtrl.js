// popular author
angular.module('myself')
	.controller('AuthorCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
		// loading incomplete
		$rootScope.loaded = false;
		// title
		$rootScope.title = 'Popular author';
		// key
		$rootScope.key = 2;

		// recommend author
		$http({
			url : './api/author_rec.php',
			method : 'get'
		}).then(function(res){
			// console.log(res);
			$scope.authors_rec = res.data.authors;
			// complete loading
			$rootScope.loaded = true;
		});

		// popular author
		$http({
			url : './api/author_hot.php',
			method : 'get'
		}).then(function(res){
			// console.log(res);
			$scope.authors_hot = res.data.authors;
			// complete loading
			$rootScope.loaded = true;
		});
	}]);