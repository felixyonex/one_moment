// Running the modules
angular.module('myself')
	.run(['$rootScope', function($rootScope) {

		// collapse
		$rootScope.collapsed = false;
		// loading incomplete
		$rootScope.loaded = false;
		// title
		$rootScope.title = 'One Moment';
		// key
		$rootScope.key = 0;

		$rootScope.toggle = function() {

			$rootScope.collapsed = !$rootScope.collapsed;

			// All navigation
			var navs = document.querySelectorAll('.navs dd');

			if ($rootScope.collapsed) {
				for (var i = 0; i < navs.length; i++) {
					navs[i].style.transform = 'translate(0)';
					navs[i].style.transitionDuration = (i + 1) * 0.15 + 's';
					navs[i].style.transitionDelay = '0.2s';
				}
			} else {
				for (var i = navs.length - 1; i >= 0; i--) {
					navs[i].style.transform = 'translate(-100%)';
					navs[i].style.transitionDuration = (navs.length - i) * 0.15 + 's';
					navs[i].style.transitionDelay = '';
				}
			}
		};
	}]);