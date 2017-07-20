mainModule.directive('header', function(){
	return {
		restrict:"E",					//ограничение что можно только использовать как тег <header>
		templateUrl: 'directives/header/header.csp', 
		controller: function($scope, $http, authorization, broker) {
			$scope.user = {};

			$scope.isEnter = function() {
				return authorization.user != "";
			};

			$scope.userObject = function() {
				return authorization.user.volunteer ? authorization.user.volunteer : authorization.user.organizer;
			};

			$scope.login = function()
			{
				$http.post(broker + "login", $scope.user).then(
					function(data) {
						authorization.user=data.data;
						$scope.user = authorization.user;
					},
					function(data){
						alert(data);
					}
				);
			};

			$scope.isOrganizer = function() {
				return (authorization.user.organizer != null && authorization.user.organizer != undefined);
			};
		}
	};
});
