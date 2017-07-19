mainModule.directive('header', function(){
	return{		
		restrict:"E",					//ограничение что можно только использовать как тег <header>
		templateUrl: 'directives/header/header.csp', 
		controller: function($scope, $http, authorization) {
			$scope.user = {};
						
			$scope.login = function() 
			{
				$http.post("broker/login", $scope.user).then(
					function(data){						
						authorization.user=data.data;
						console.log(authorization.user);
					},
					function(data){
						alert(data);
					})
			}
		}
	}
});