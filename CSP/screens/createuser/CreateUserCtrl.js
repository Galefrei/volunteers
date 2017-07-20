mainModule.controller('CreateUserCtrl', function($scope, $http, $location){
	$scope.cancel = function() {$location.url('/main')}

});