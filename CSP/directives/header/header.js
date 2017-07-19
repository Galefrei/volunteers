mainModule.directive('header', function(){
	return{		
		restrict:"E",					//ограничение что можно только использовать как тег <header>
		templateUrl: 'directives/header/header.csp', 
		controller: function($scope) {
			$scope.user = {};			
			$scope.login = function() 
			{
				$http.post("broker/login", $scope.user).then(
					function(data){
						console.log(dats);
					},
					function(data){
						alert(data);
					})
			}
		}
	}
});