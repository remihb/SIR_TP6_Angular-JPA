'use strict';

/**
 * @ngdoc function
 * @name tp6App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tp6App
 */
angular.module('tp6App')
  .controller('AboutCtrl', function ($scope,$http) {
      $scope .toto = function(){
        console.log('foo');
        $http({
  method: 'GET',
  url: '/rest/home'
}).then(function successCallback(response) {
    console.log(response.data);
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
      };
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
