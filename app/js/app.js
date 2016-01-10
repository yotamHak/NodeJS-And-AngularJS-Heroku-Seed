'use strict';

var myApp = angular.module('myApp', ['ngRoute'])
    .config(function($routeProvider, $locationProvider){
       $routeProvider.when('/main',
           {
               templateUrl: 'templates/main.html'
           });
        $routeProvider.when('/view1',
            {
                templateUrl: 'templates/view1.html',
                controller: 'view1Controller'
            });
        $routeProvider.when('/view2',
            {
                templateUrl: 'templates/view2.html',
                controller: 'view2Controller'
            });
        $routeProvider.otherwise({redirectTo: '/main'});
        $locationProvider.html5Mode(true);
    });