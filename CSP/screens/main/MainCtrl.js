mainModule.controller('MainCtrl', function($scope, $http, broker){

	$http.get(broker + "events").then(
		function(data) {

			$scope.event = data.data;
			console.log($scope.event);
		},
		function(data) {
			alert(data);
		}
	);

});
