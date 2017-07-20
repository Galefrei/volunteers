mainModule.controller('AdminCtrl', function($scope, $http, $location){
	$http.get("broker/user").then(
			function(data){
				$scope.users = data.data;
			}, 
			function(data){
				alert(data);
			}
			);
	
	$http.get("broker/organization").then(
			function(data){
				$scope.organizations = data.data;
			}, 
			function(data){
				alert(data);
			}
			);
	
	$scope.userObject=function(user) { 
			if(user.volunteer)
			return user.volunteer;
			else return user.organizer;
	}

});