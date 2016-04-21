/* jshint
laxcomma:true
, laxbreak:true
, unused : false
, loopfunc: true
*/

'use strict';

/**
* @ngdoc function
* @name tp6App.controller:AddhomeCtrl
* @description
* # AddhomeCtrl
* Controller of the tp6App
*/
angular.module('tp6App')
.controller('AddhomeCtrl', function ($scope, $http, $compile, $window) {
    var num = 0;
    $scope.home = {
        address : null,
        size : null,
        nbRooms : null,
        heaters : [],
        inhabitant : null
    };

    $scope.addheater = function(){
        $("#myform").append($compile("<div class=\"form-group\"><label for=\"nvheater\">heater " + num + " : </label>"
        + "<input type=\"text\" ng-model=\"heaters.h" + num + "\" name=\"heater" + num + "\" placeholder=\"consumption\"></input></div>")($scope));
        num++;
    };

    $http({
        method: 'GET',
        url: '/rest/home/add'
    }).then(function(response) {
        $scope.persons = response.data;
    });

    $scope.posthome = function(){
        _.map($scope.heaters, function(h){
            if (h !== ""){
                $scope.home.heaters.push({consumption : h});
            }
        });
        $scope.home.inhabitant = ($scope.home.inhabitant === "") ? null : JSON.parse($scope.home.inhabitant);
        $http({
            method: 'POST',
            url: '/rest/home/add',
            data: $scope.home
        }).then(function(response) {
            $window.location.href = "/#/home";
            $window.location.reload();
        })
        .catch(function(error){
        });
    };
});
