'use strict';


var mainModule = angular.module('mainModule', ['ngRoute']);

mainModule.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/main', {templateUrl: 'screens/main/main.csp',  controller: 'MainCtrl'});
    $routeProvider.when('/registration', {templateUrl: 'screens/registration/registration.html',  controller: 'RegCtrl'});
    $routeProvider.when('/event', {templateUrl: 'screens/createevent/createevent.html',  controller: 'CreateEventCtrl'});
    $routeProvider.when('/event/:id', {templateUrl: 'screens/event/event.csp',  controller: 'EventCtrl'});
    $routeProvider.when('/profile', {templateUrl: 'screens/profile/profile.csp',  controller: 'ProfCtrl'});

    $routeProvider.otherwise({redirectTo: '/main'});
}]);

mainModule.constant('broker', "http://217.144.174.69:57772/csp/volunteers/broker/");
