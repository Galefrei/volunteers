mainModule.controller('CreateEventCtrl', function($scope, $http, $location){
	$scope.event = {
		name: "",
		begin: "",
		end: "",
		city: {id: ""},
		description: ""
	};

	$http.get("broker/city").then(
			function(data){
				$scope.array = data.data;
			}, 
			function(data){
				alert(data);
			}
			);

	$scope.save = function() {
		$scope.event.organizer = {id: "1"}
		$scope.event.begin = moment($scope.event.begin).format("YYYY-MM-DD HH:mm:ss");
		$scope.event.end = moment($scope.event.end).format("YYYY-MM-DD HH:mm:ss");
		$http.post("broker/event", $scope.event).then(
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