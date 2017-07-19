mainModule.controller('ProfCtrl', function($scope, $http, $location, authorization){

	/*

		$http.get("broker/volunteer/").then(
			function(data) {
				$scope.user = data.data;
				console.log($scope.event);
			},
			function(data) {
				alert(data);
			})
			$scope.cancel = function() {$location.url('/main')}
	*/
	
	$scope.personIsOrganizer=function(){
		if (authorization.user.volunteer == undefined)
		return true;
	}
	$scope.user = authorization.user;
	
	$scope.cancel = function() {$location.url('/main')}
});