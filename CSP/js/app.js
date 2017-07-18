'use strict';


var mainModule = angular.module('mainModule', ['ngRoute']); 
var regModule = angular.module('regModule', ['ngRoute']); 

mainModule.config(['$routeProvider', function($routeProvider) {
	
	
    //$routeProvider.when('/faculty', {templateUrl: 'partials/faculty.csp',  controller: 'FacultyCtrl'});
    $routeProvider.when('/main', {templateUrl: 'screens/main/main.csp',  controller: 'MainCtrl'});
    $routeProvider.when('/registration', {templateUrl: 'screens/registration/registration.html',  controller: 'RegCtrl'});
        
    $routeProvider.otherwise({redirectTo: '/main'});
  }]);
 