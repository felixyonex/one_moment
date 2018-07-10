// 设置
angular.module('myself')
	.controller('SettingCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
		// title
		$rootScope.title = '设置';
		// key
		$rootScope.key = 5;
		// loading completed
		$rootScope.loaded = true;
	}]);