mainModule.controller('RegCtrl', function($scope, $http, $location){
	$scope.user = {
		name: "",
		dob: "",
		city: {id: ""},
		phone: "",
		email: "",
		login: "",
		password: ""
	};

	$scope.save = function() {
		$scope.user.dob = moment($scope.user.dob).format("YYYY-MM-DD HH:mm:ss");
		$http.post("broker/volunteer", $scope.user).then(
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
