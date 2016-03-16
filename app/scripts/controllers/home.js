'use strict';

/**
* @ngdoc function
* @name tp6App.controller:HomeCtrl
* @description
* # HomeCtrl
* Controller of the tp6App
*/
angular.module('tp6App')
.controller('HomeCtrl', function ($scope,$http) {
    $scope.getHomes = function(){
        $http({
            method: 'GET',
            url: '/rest/home'
        }).then(function(response) {
            console.log(response.data);
            _.map(response.data, function(h){
                if(!_.isArray(h.heaters)){
                    h.heaters = [].concat(h.heaters);
                }
            });
            $scope.homes = response.data;
        });
    };
});
