// navigation controller
angular.module('myself')
	.controller('NavsCtrl', ['$scope', function($scope) {
		$scope.navs = [{
			text: 'One Moment',
			link: '#!/today',
			icon: 'icon-home'
		}, {
			text: 'Yesterday',
			link: '#!/older',
			icon: 'icon-file-empty'
		}, {
			text: 'Popular author',
			link: '#!/author',
			icon: 'icon-pencil'
		}, {
			text: 'Category',
			link: '#!/category',
			icon: 'icon-menu'
		}, {
			text: 'My favorite',
			link: '#!/favourite',
			icon: 'icon-heart'
		}, {
			text: 'Settings',
			link: '#!/settings',
			icon: 'icon-cog'
		}];
	}]);