mainModule.controller('RegCtrl', function($scope, $http, $location){
	$scope.user = {
		name: "",
		years: "",
		city: "",
		phone: "",
		email: "",
		login: "",
		password: ""
	};

	$scope.save = function() {
		$http.post("broker/volunteer/", $scope.user).then(
			function(data){
				alert("OK");
			}, 
			function(data){
				alert(data);
			}
		);	
	};
	$scope.cancel = function() {$location.url('/main')}

});
