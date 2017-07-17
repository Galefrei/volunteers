'use strict';


var mainModule = angular.module('mainModule', ['ngRoute']); 

mainModule.config(['$routeProvider', function($routeProvider) {
	
	
    //$routeProvider.when('/faculty', {templateUrl: 'partials/faculty.csp',  controller: 'FacultyCtrl'});
    $routeProvider.when('/main', {templateUrl: 'screens/main/main.csp',  controller: 'MainCtrl'});
    
    
    $routeProvider.otherwise({redirectTo: '/main'});
  }]);
 