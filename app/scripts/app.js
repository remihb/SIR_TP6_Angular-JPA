'use strict';

/**
* @ngdoc overview
* @name tp6App
* @description
* # tp6App
*
* Main module of the application.
*/
angular
.module('tp6App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
])
.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
    })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
    })
    .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
    })
    .when('/home/add', {
      templateUrl: 'views/addhome.html',
      controller: 'AddhomeCtrl',
      controllerAs: 'addhome'
    })
    .otherwise({
        redirectTo: '/'
    });
});
