mainModule.directive('header', function(){
	return{		
		restrict:"E",					//ограничение что можно только использовать как тег <header>
		templateUrl: 'directives/header/header.csp', 
		controller: function($scope, $http, autorization) {
			$scope.user = {};
						
			$scope.login = function() 
			{
				$http.post("broker/login", $scope.user).then(
					function(data){						
						autorization.user=data.data;
						console.log(autorization.user);
					},
					function(data){
						alert(data);
					})
			}
		}
	}
});