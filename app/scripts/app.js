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
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'main'
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
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
    })
    .otherwise({
        redirectTo: '/home'
    });
});
