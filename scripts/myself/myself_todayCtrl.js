// 今日一刻
angular.module('myself')
	.controller('TodayCtrl', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
		// loading incomplete
		$rootScope.loaded = false;
		// title
		$rootScope.title = 'One Moment';
		// key
		$rootScope.key = 0;

		//obtain time
		var today = $filter('date')(new Date, 'yyyy-MM-dd');
		console.log(today);

		$http({
			// access API in domain
			url: './api/today.php',
			method: 'get',
			// params: {today: today}
		}).then(function(res) {
			// console.log(res.data);
			$scope.posts = res.data.posts;
			$scope.date = res.data.date;

			// complete loading
			$rootScope.loaded = true;
		});
	}]);