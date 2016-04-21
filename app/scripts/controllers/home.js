/* jshint
laxcomma:true
, laxbreak:true
, unused : false
, loopfunc: true
*/

'use strict';

/**
* @ngdoc function
* @name tp6App.controller:HomeCtrl
* @description
* # HomeCtrl
* Controller of the tp6App
*/
angular.module('tp6App')
.controller('HomeCtrl', function ($scope, $http, $route) {
    $http({
        method: 'GET',
        url: '/rest/home'
    }).then(function(response) {
        _.map(response.data, function(h){
            if(!_.isArray(h.heaters)){
                h.heaters = [].concat(h.heaters);
            }
        });
        $scope.homes = response.data;
    });
    $scope.delete = function(id){
        $http({
            method: 'DELETE',
            url: '/rest/home/delete/' + id
        }).then(function(response) {
            $route.reload();
        });
    };
});
