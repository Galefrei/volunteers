mainModule.controller('ProfCtrl', function($scope, $http, $location){

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
	
	$scope.user = {
		name: "Имя Фамилия",
		dob: "1996-10-10",
		city: "Красноярск",
		phone: "8-695-654-5454",
		email: "joohn@maile.com",
		login: "name",
		password: "pass",
		skills: "Список полезных умений"
	};
	$scope.org = {
		name: "Название организации",
		city: "Красноярск",
		phone: "8-654-654-5126",
		desc: "Длинное описание организации"
		
	};
	$scope.cancel = function() {$location.url('/main')}
});