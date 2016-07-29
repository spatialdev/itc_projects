'use strict';


// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute', 'ngMaterial', 'myApp.config', 'ui.router', 'http-auth-interceptor', 'angular-jwt'
]).
    config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, jwtInterceptorProvider) {

        $urlRouterProvider.otherwise("/map");

        $stateProvider
            .state('map', {
                url: "/map",
                //url: "/map",
                templateUrl: "itc_projects/app/templates/map.html",
                controller: 'MapCtrl'
            })
            .state('login', {
                url: "/login",
                templateUrl: "itc_projects/app/templates/login.html",
                controller: 'LoginCtrl'
            });

        // use the HTML5 History API to remove the #hash in the URL
        $locationProvider.html5Mode(true);

    }).run(function($q, userService, jwtHelper, $rootScope){

    })
