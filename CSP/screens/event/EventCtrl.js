mainModule.controller('EventCtrl', function($scope, $http, $routeParams, $location, broker, authorization){

	console.log($routeParams.id);

		$http.get(broker + "event/"+$routeParams.id).then(
			function(data) {
			
				$scope.event = data.data;
				console.log($scope.event);
				$scope.event.begin = moment($scope.event.begin, "YYYY-MM-DD HH:mm:ss").format("DD.MM.YY HH:mm");
				$scope.event.end = moment($scope.event.end, "YYYY-MM-DD HH:mm:ss").format("DD.MM.YY HH:mm");
			},
			function(data) {
				alert(data);
			})
			
			$scope.cancel = function() {$location.url('/main')}
			
			
			
			$scope.registrationOnEvent = function()
			{
				$http.post("broker/regEvent", {event: {id: $scope.event.id}, volunteer: {id: authorization.user.volunteer.id}}).then(
				function(data){
					//alert("OK");
					console.log($scope.event.id);
					console.log(authorization.user.volunteer.id);
				}, 
				function(data){
					alert(data);
				});
			};
		
	
			/*$scope.deleteRegistrationOnEvent() = function()
			{
				$http.delete("broker/regEvent/:id", "").then(
				function(data){
					//alert("OK");
					console.log($scope.event.id);
					console.log(authorization.user.volunteer.id);
				}, 
				function(data){
					alert(data);
				});
			}*/

	
});
