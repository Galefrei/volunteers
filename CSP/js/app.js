'use strict';


var mainModule = angular.module('mainModule', ['ngRoute']); 
var regModule = angular.module('regModule', ['ngRoute']); 

mainModule.config(['$routeProvider', function($routeProvider) {
	
	
    //$routeProvider.when('/faculty', {templateUrl: 'partials/faculty.csp',  controller: 'FacultyCtrl'});
    $routeProvider.when('/main', {templateUrl: 'screens/main/main.csp',  controller: 'MainCtrl'});
    $routeProvider.when('/registration', {templateUrl: 'screens/registration/registration.html',  controller: 'RegCtrl'});
    $routeProvider.when('/event', {templateUrl: 'screens/createevent/createevent.html',  controller: 'CreateEventCtrl'});
    $routeProvider.when('/event/:id', {templateUrl: 'screens/event/event.csp',  controller: 'EventCtrl'});
    $routeProvider.when('/profile', {templateUrl: 'screens/profile/profile.csp',  controller: 'ProfCtrl'});
        
    $routeProvider.otherwise({redirectTo: '/main'});
  }]);
 