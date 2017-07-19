mainModule.controller('ProfCtrl', function($scope, $http, $location, authorization){

	$scope.personIsOrganizer=function(){
		if (authorization.user.volunteer == undefined)
		return true;
	}
	$scope.user = authorization.user;
	
	$scope.cancel = function() {$location.url('/main')}
});
